// This is a Docusaurus plugin to automatically create SVG images from the YAML
// files located in the "image-generator/yml" directory
// This is triggered whenever the website is built

const path = require("path");
const { getFileLoaderUtils } = require("@docusaurus/core/lib/webpack/utils");

module.exports = function (context, options) {
  return {
    name: "hanabi-docusaurus-plugin",
    configureWebpack(config, isServer, utils) {
      const createSVGScriptPath = path.resolve(__dirname, "create-svg.py");
      return {
        module: {
          rules: [
            {
              test: /image-generator.*yml$/,
              use: getFileLoaderUtils().rules.svg().use.concat([{
                loader: "shell-loader",
                options: {
                  script: `python ${createSVGScriptPath}`,
                },
              }, {
                loader: path.resolve(__dirname, "depender"),
              }]),
            },
          ],
        },
      };
    },
  };
};
