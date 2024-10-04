import { diff, isMain, readFile } from "complete-node";
import { glob } from "glob";
import path from "node:path";
import xmlFormat from "xml-formatter";
import convertYAMLToSVG from "../image-generator/plugin/src/convertYAMLToSVG.js"; // eslint-disable-line @typescript-eslint/no-restricted-imports

const REPO_ROOT = path.join(import.meta.dirname, "..");

if (isMain()) {
  await checkValidYAMLFiles();
}

export async function checkValidYAMLFiles(): Promise<void> {
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

    const svgPretty = prettifySVG(svg);
    const testSVGPretty = prettifySVG(testSVG);

    if (svgPretty !== testSVGPretty) {
      console.error("------------------------------------------------------\n");
      console.error("Old SVG:\n");
      console.error(testSVG);
      console.error("------------------------------------------------------\n");
      console.error("New SVG:\n");
      console.error(svg);
      console.error("------------------------------------------------------\n");
      console.error("Lines that are different:\n");
      diff(svgPretty, testSVGPretty);
      console.error();
      throw new Error(
        `The "convertYAMLToSVG" function failed to create an SVG file that matched the reference SVG for file: ${yamlFilePath}`,
      );
    }
  }

  // TODO
  // Remove the referential SVGs and simply run the function on every file to check for validity.
}

function prettifySVG(svg: string): string {
  const formatted = (xmlFormat as unknown as (input: string) => string)(svg);

  const lines = formatted.split("\n");
  for (const [lineNum, line] of lines.entries()) {
    if (lineNum === 1) {
      if (!line.startsWith("<svg ")) {
        throw new Error(
          `Failed to parse the second line of an SVG file: ${line}`,
        );
      }

      // Ignore the second line that starts with "<svg", since the attributes are not sorted in the
      // same way between Node.js and Python.
      lines[1] = "";
    }

    const newLine = line.replaceAll(
      /"(\d+)\.0"/g,
      (_match, number) => `"${number}"`,
    );
    if (newLine !== line) {
      lines[lineNum] = newLine;
    }
  }
  return lines.join("\n");
}
