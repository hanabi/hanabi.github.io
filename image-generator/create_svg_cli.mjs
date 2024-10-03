/* eslint-disable */
// @ts-nocheck

// Does the same thing as the loader, but without webpack.
// Useful for manual testing, and also for linter.

import create_svg from "./convertYAMLToSVG.mjs";

const chunks = [];
const readable = process.stdin;

readable.on("readable", () => {
  let chunk;
  while (null !== (chunk = readable.read())) {
    chunks.push(chunk);
  }
});

readable.on("end", () => {
  const content = chunks.join("");
  const data = create_svg(content);
  process.stdout.write(data);
});
