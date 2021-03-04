const path = require("path")
const { getFileLoaderUtils } = require("@docusaurus/core/lib/webpack/utils");

module.exports = function (context, options) {
  return {
    name: "hanabi-docusaurus-plugin",
    configureWebpack(config, isServer, utils) {
      const createSVGScriptPath = path.resolve(__dirname, "create-svg.sh");
      return {
        module: {
          rules: [
            {
              test: /image-generator.*yml$/,
              use: getFileLoaderUtils().rules.svg().use.concat([{
                loader: "shell-loader",
                options: {
                  script: `bash ${createSVGScriptPath}`,
                },
              }]),
            },
          ],
        },
      };
    },
  };
};
