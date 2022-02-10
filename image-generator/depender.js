const path = require("path");

module.exports = function addCreateSVGDependency(content, _map, _meta) {
  this.addDependency(path.resolve(__dirname, "create_svg.py"));
  return content;
};
