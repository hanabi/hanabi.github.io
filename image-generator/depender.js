const path = require("path");

module.exports = function (content, map, meta) {
	this.addDependency(path.resolve(__dirname, "create-svg.py"));
	return content;
};
