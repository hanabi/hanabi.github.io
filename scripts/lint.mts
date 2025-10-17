import { $o, lintCommands, readFile } from "complete-node";
import { glob } from "glob";
import path from "node:path";

const REPO_ROOT = path.join(import.meta.dirname, "..");

const BAD_WORDS = [
  // This is a common mistake: https://github.com/hanabi/hanabi.github.io/pull/1367
  "Principal",
] as const;

await lintCommands(import.meta.dirname, [
  // Use TypeScript to type-check the code.
  "tsc --noEmit",
  "tsc --noEmit --project ./scripts/tsconfig.json",

  // Use ESLint to lint the TypeScript code.
  // - "--max-warnings 0" makes warnings fail, since we set all ESLint errors to warnings.
  "eslint --max-warnings 0 .",

  // Use Prettier to check formatting.
  // - "--log-level=warn" makes it only output errors.
  "prettier --log-level=warn --check .",

  // Use Knip to check for unused files, exports, and dependencies. (We do not currently use Knip
  // since there is no Docusaurus plugin and whitelisting everything does not get us much value.)
  /// $`knip --no-progress`,

  // Use CSpell to spell check every file.
  // - "--no-progress" and "--no-summary" make it only output errors.
  "cspell --no-progress --no-summary .",

  // Check for unused words in the CSpell configuration file.
  "cspell-check-unused-words",

  // Check for template updates.
  "complete-cli check --ignore build.ts,knip.config.js,LICENSE,lint.ts",

  // eslint-disable-next-line unicorn/prefer-top-level-await
  ["check unused YAML files", checkUnusedYAMLFiles()],

  // eslint-disable-next-line unicorn/prefer-top-level-await
  ["check bad words", checkBadWords()],
]);

async function checkUnusedYAMLFiles() {
  const importRegex = /import .+ from ".*\/(.+.yml)/;

  // Go through every ".mdx" file and compile a set of used YAML files.
  const mdxFilePathFragments = await glob("./docs/**/*.mdx");
  const usedYAMLFileNames = new Set<string>();
  for (const mdxFilePathFragment of mdxFilePathFragments) {
    const mdxFilePath = path.join(REPO_ROOT, mdxFilePathFragment);
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

      const yamlFileName = match[1];
      if (yamlFileName === undefined) {
        throw new Error(
          `Failed to parse the YAML file path from file: ${mdxFilePath}`,
        );
      }

      if (usedYAMLFileNames.has(yamlFileName)) {
        throw new Error(
          `The following YAML file is being used two or more times: ${yamlFileName}`,
        );
      }

      usedYAMLFileNames.add(yamlFileName);
    }
  }

  // Go through every ".yml" file.
  const yamlFilePathFragments = await glob("./docs/**/*.yml");
  const yamlFileNames = new Set<string>();
  for (const yamlFilePathFragment of yamlFilePathFragments) {
    const yamlFileName = path.basename(yamlFilePathFragment);
    if (yamlFileNames.has(yamlFileName)) {
      throw new Error(
        `There is more than one YAML file with the name of: ${yamlFileName}`,
      );
    }

    yamlFileNames.add(yamlFileName);

    if (!usedYAMLFileNames.has(yamlFileName)) {
      throw new Error(
        `The following YAML file is not being used: ${yamlFileName}`,
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
