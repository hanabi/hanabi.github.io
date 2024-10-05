// This script tests to see if all YAML files will convert without any run-time errors.

import { readFile } from "complete-node";
import { glob } from "glob";
import path from "node:path";
import convertYAMLToSVG from "../image-generator/plugin/src/convertYAMLToSVG.js"; // eslint-disable-line @typescript-eslint/no-restricted-imports

const REPO_ROOT = path.join(import.meta.dirname, "..");

const yamlFilePathFragments = await glob("./**/*.yml", {
  ignore: "node_modules/**",
});

for (const yamlFilePathFragment of yamlFilePathFragments) {
  const yamlFilePath = path.join(REPO_ROOT, yamlFilePathFragment);
  console.log(`Testing: ${yamlFilePath}`);
  const fileContents = readFile(yamlFilePath);
  convertYAMLToSVG.default(fileContents);
}

console.log("All YAML files converted without errors.");
