import { $, lintScript, readFile } from "complete-node";
import { glob } from "glob";
import path from "node:path";

const REPO_ROOT = path.join(import.meta.dirname, "..");

await lintScript(async () => {
  await Promise.all([
    // Use TypeScript to type-check the code.
    $`tsc --noEmit`,
    $`tsc --noEmit --project ./scripts/tsconfig.json`,

    // Use ESLint to lint the TypeScript code.
    // - "--max-warnings 0" makes warnings fail, since we set all ESLint errors to warnings.
    $`eslint --max-warnings 0 .`,

    // Use Prettier to check formatting.
    // - "--log-level=warn" makes it only output errors.
    $`prettier --log-level=warn --check .`,

    // Use Knip to check for unused files, exports, and dependencies.
    $`knip --no-progress`,

    // Use CSpell to spell check every file.
    // - "--no-progress" and "--no-summary" make it only output errors.
    $`cspell --no-progress --no-summary .`,

    // Check for unused words in the CSpell configuration file.
    $`cspell-check-unused-words`,

    // Check for template updates.
    $`isaacscript check-ts --ignore build.ts,LICENSE,lint.ts`,

    // @template-customization-start
    checkUnusedYAMLFiles(),
    // @template-customization-end
  ]);
});

async function checkUnusedYAMLFiles() {
  const importRegex = /import .+ from ".*\/(.+.yml)/;

  // Go through every ".mdx" file and compile a set of used YAML files.
  const mdxFilePathFragments = await glob("./docs/**/*.mdx");
  const usedYAMLFileNames = new Set<string>();
  for (const mdxFilePathFragment of mdxFilePathFragments) {
    const mdxFilePath = path.join(REPO_ROOT, mdxFilePathFragment);
    const fileContents = readFile(mdxFilePath);
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
