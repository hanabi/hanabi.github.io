import { $, diff, lintScript, readFile } from "complete-node";
import { glob } from "glob";
import path from "node:path";
import xmlFormat from "xml-formatter";
import convertYAMLToSVG from "../image-generator/plugin/src/convertYAMLToSVG.js"; // eslint-disable-line @typescript-eslint/no-restricted-imports

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

    /// checkValidYAMLFiles(),
    checkUnusedYAMLFiles(),

    // @template-customization-end
  ];

  await Promise.all(promises);
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function checkValidYAMLFiles() {
  // Go through every ".yml" file.
  const yamlFilePathFragments = await glob("./**/*.yml", {
    ignore: "node_modules/**",
  });

  for (const yamlFilePathFragment of yamlFilePathFragments) {
    const yamlFilePath = path.join(REPO_ROOT, yamlFilePathFragment);
    const fileContents = readFile(yamlFilePath);
    const svg = convertYAMLToSVG.default(fileContents);

    const testSVGPath = yamlFilePath
      .replace("image-generator", "image-generator/test")
      .replace(".yml", ".svg");
    const testSVG = readFile(testSVGPath);

    const svgPretty = prettifyXML(svg);
    const testSVGPretty = prettifyXML(svg);

    if (svgPretty !== testSVGPretty) {
      console.error(
        "-----------------------------------------------------------------------------",
      );
      console.error("Old SVG:\n");
      console.error(testSVG);
      console.error(
        "-----------------------------------------------------------------------------",
      );
      console.error("New SVG:\n");
      console.error(svg);
      console.error(
        "-----------------------------------------------------------------------------",
      );
      diff(svgPretty, testSVGPretty);
      throw new Error(
        `The "convertYAMLToSVG" function failed to create an SVG file that matched the reference SVG for file: ${yamlFilePath}`,
      );
    }
  }

  // TODO
  // Remove the referential SVGs and simply run the function on every file to check for validity.
}

function prettifyXML(xml: string): string {
  const formatted = (xmlFormat as unknown as (input: string) => string)(xml);

  const lines = formatted.split("\n");
  for (const [lineNum, line] of lines.entries()) {
    const match = line.match(/"(\d+)\.0"/);
    if (match !== null) {
      const number = match[1];
      if (number === undefined) {
        throw new Error("Failed to parse the line.");
      }
      const newLine = line.replace(`"${number}.0"`, number);
      lines[lineNum] = newLine;
    }
  }
  return lines.join("\n");
}

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
