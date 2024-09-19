// Webpack loaders do not support TypeScript, so this file must be in JavaScript.

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

const path = require("node:path");

module.exports = function addCreateSVGDependency(content, _map, _meta) {
  this.addDependency(path.resolve(__dirname, "create_svg.py"));
  return content;
};
