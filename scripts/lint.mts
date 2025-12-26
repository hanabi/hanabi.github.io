import { $o, lintCommands, readFile } from "complete-node";
import { glob } from "glob";
import path from "node:path";

const REPO_ROOT = path.resolve(import.meta.dirname, "..");

const BAD_WORDS = [
  // This is a common mistake: https://github.com/hanabi/hanabi.github.io/pull/1367
  "Principal",
] as const;

await lintCommands(import.meta.dirname, [
  // Use TypeScript to type-check the code.
  "tsc --noEmit",
  "tsc --noEmit --project ./scripts/tsconfig.json",

  // Use ESLint to lint the TypeScript code.
  "eslint",

  // Use Prettier to check formatting.
  // - "--log-level=warn" makes it only output errors.
  "prettier --log-level=warn --check .",

  // Use Knip to check for unused files, exports, and dependencies. (We do not currently use Knip
  // since there is no Docusaurus plugin and whitelisting everything does not get us much value.)
  /// $`knip --no-progress`,

  // Use CSpell to spell check every file.
  // - "--no-progress" and "--no-summary" make it only output errors.
  "cspell --no-progress --no-summary",

  // Check for unused words in the CSpell configuration file.
  "cspell-check-unused-words",

  // Check for template updates.
  "complete-cli check --ignore build.ts,knip.config.js,LICENSE,lint.ts",

  // Lint YAML files.
  "yamllint .",

  // eslint-disable-next-line unicorn/prefer-top-level-await
  ["check unused YAML files", checkUnusedYAMLFiles()],

  // eslint-disable-next-line unicorn/prefer-top-level-await
  ["check bad words", checkBadWords()],
]);

async function checkUnusedYAMLFiles() {
  const importRegex = /import .+ from "([^"]+\.yml)"/;

  // Go through every ".mdx" file and compile a set of used YAML files.
  const mdxFilePathFragments = await glob("./docs/**/*.mdx");
  const usedYAMLFilePaths = new Set<string>();
  for (const mdxFilePathFragment of mdxFilePathFragments) {
    const mdxFilePath = path.join(REPO_ROOT, mdxFilePathFragment);
    const mdxDir = path.dirname(mdxFilePath);
    // eslint-disable-next-line no-await-in-loop
    const fileContents = await readFile(mdxFilePath);
    const lines = fileContents.split("\n");

    for (const line of lines) {
      // The "example-images.mdx" file imports some YAML files twice using `raw-loader`.
      if (line.includes("!raw-loader!")) {
        continue;
      }

      const match = line.match(importRegex);
      if (match === null) {
        continue;
      }

      const yamlImportPath = match[1];
      if (yamlImportPath === undefined) {
        throw new Error(
          `Failed to parse the YAML file path from file: ${mdxFilePath}`,
        );
      }

      // Resolve the import path relative to the importing file.
      const absoluteYamlPath = path.resolve(mdxDir, yamlImportPath);
      // Normalize to relative path from docs directory.
      const relativeYamlPath = path.relative(
        path.join(REPO_ROOT, "docs"),
        absoluteYamlPath,
      );

      if (usedYAMLFilePaths.has(relativeYamlPath)) {
        throw new Error(
          `The following YAML file is being used two or more times: ${relativeYamlPath}`,
        );
      }

      usedYAMLFilePaths.add(relativeYamlPath);
    }
  }

  // Go through every ".yml" file.
  const yamlFilePathFragments = await glob("./docs/**/*.yml");
  const yamlFilePaths = new Set<string>();
  for (const yamlFilePathFragment of yamlFilePathFragments) {
    // Normalize the path relative to docs directory.
    const relativeYamlPath = path.relative("./docs", yamlFilePathFragment);

    yamlFilePaths.add(relativeYamlPath);

    if (!usedYAMLFilePaths.has(relativeYamlPath)) {
      throw new Error(
        `The following YAML file is not being used: ${relativeYamlPath}`,
      );
    }
  }
}

async function checkBadWords() {
  const output = await $o`git ls-files`;
  const filePaths = output.trim().split("\n");
  await Promise.all(
    filePaths.map(async (filePath) => {
      if (filePath === "scripts/lint.mts") {
        return;
      }

      const fileContents = await readFile(filePath);
      for (const word of BAD_WORDS) {
        if (fileContents.includes(word)) {
          throw new Error(
            `The following file contains the bad word "${word}": ${filePath}`,
          );
        }
      }
    }),
  );
}
