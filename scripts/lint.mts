import { $, lintScript, readFile } from "complete-node";
import { glob } from "glob";
import path from "node:path";
import { checkValidYAMLFiles } from "./checkValidYAMLFiles.mjs";

const REPO_ROOT = path.join(import.meta.dirname, "..");

await lintScript(async () => {
  const promises = [
    // Use TypeScript to type-check the code.
    $`tsc --noEmit`,
    $`tsc --noEmit --project ./scripts/tsconfig.json`,

    // Use ESLint to lint the TypeScript code.
    // - "--max-warnings 0" makes warnings fail, since we set all ESLint errors to warnings.
    $`eslint --max-warnings 0 .`,

    // Use Prettier to check formatting.
    // - "--log-level=warn" makes it only output errors.
    $`prettier --log-level=warn --check .`,

    // Use CSpell to spell check every file.
    // - "--no-progress" and "--no-summary" make it only output errors.
    $`cspell --no-progress --no-summary .`,

    // Check for unused words in the CSpell configuration file.
    $`cspell-check-unused-words`,

    // Check for template updates.
    $`isaacscript check-ts --ignore build.ts,knip.config.js,LICENSE,lint.ts`,

    // @template-customization-start

    checkValidYAMLFiles(),
    checkUnusedYAMLFiles(),

    // @template-customization-end
  ];

  await Promise.all(promises);
});

async function checkUnusedYAMLFiles() {
  const importRegex = /import .+ from "@site\/(image-generator\/yml\/.+yml)/;

  // Go through every ".mdx" file and compile a set of used YAML files.
  const mdxFilePathFragments = await glob("./docs/**/*.mdx");
  const usedYAMLFilePaths = new Set<string>();
  for (const mdxFilePathFragment of mdxFilePathFragments) {
    const mdxFilePath = path.join(REPO_ROOT, mdxFilePathFragment);
    const fileContents = readFile(mdxFilePath);
    const lines = fileContents.split("\n");

    for (const line of lines) {
      const match = line.match(importRegex);
      if (match === null) {
        continue;
      }

      const yamlFilePathFragment = match[1];
      if (yamlFilePathFragment === undefined) {
        throw new Error(
          `Failed to parse the YAML file path from file: ${mdxFilePath}`,
        );
      }

      const yamlFilePath = path.join(REPO_ROOT, yamlFilePathFragment);

      if (usedYAMLFilePaths.has(yamlFilePath)) {
        throw new Error(
          `The following YAML file is being used two or more times: ${yamlFilePath}`,
        );
      }

      usedYAMLFilePaths.add(yamlFilePath);
    }
  }

  // Go through every ".yml" file.
  const yamlFilePathFragments = await glob("./**/*.yml", {
    ignore: "node_modules/**",
  });
  for (const yamlFilePathFragment of yamlFilePathFragments) {
    const yamlFilePath = path.join(REPO_ROOT, yamlFilePathFragment);
    if (!usedYAMLFilePaths.has(yamlFilePath)) {
      throw new Error(
        `The following YAML file is not being used: ${yamlFilePath}`,
      );
    }
  }
}
