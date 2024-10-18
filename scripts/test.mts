// This script tests to see if all YAML files will convert without any run-time errors.

import { isMain, readFile } from "complete-node";
import { glob } from "glob";
import path from "node:path";
import convertYAMLToSVG from "../image-generator/plugin/src/convertYAMLToSVG.js"; // eslint-disable-line @typescript-eslint/no-restricted-imports

const REPO_ROOT = path.join(import.meta.dirname, "..");

if (isMain()) {
  await testEveryYAMLFile(false);
}

/**
 * Ensure that an SVG file can be generated from every YAML file without any run-time errors
 * occurring. (This is useful because Zod will throw a run-time error if there is a mistake when
 * parsing the file format.)
 */
export async function testEveryYAMLFile(quiet: boolean): Promise<void> {
  const yamlFilePathFragments = await glob("./**/*.yml", {
    ignore: "node_modules/**",
  });

  for (const yamlFilePathFragment of yamlFilePathFragments) {
    const yamlFilePath = path.join(REPO_ROOT, yamlFilePathFragment);
    if (!quiet) {
      console.log(`Testing: ${yamlFilePath}`);
    }
    const fileContents = readFile(yamlFilePath);
    convertYAMLToSVG.default(fileContents);
  }

  if (!quiet) {
    console.log("All YAML files converted without errors.");
  }
}
