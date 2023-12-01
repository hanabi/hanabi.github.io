// This is a Docusaurus plugin to automatically create SVG images from the YAML files located in the
// "image-generator/yml" directory. This is triggered whenever the website is built.

const path = require("node:path");

module.exports = function hanabiDocusaurusPlugin(_context, _options) {
  return {
    name: "hanabi-docusaurus-plugin",
    configureWebpack(_config, _isServer, _utils) {
      const createSVGScriptPath = path.resolve(__dirname, "create_svg.py");
      return {
        module: {
          rules: [
            {
              test: /image-generator.*yml$/,
              use: [
                {
                  loader: "@svgr/webpack",
                  options: {
                    prettier: false,
                    svgo: true,
                    svgoConfig: {
                      plugins: [
                        {
                          name: "preset-default",
                          params: {
                            overrides: {
                              removeViewBox: false,
                            },
                          },
                        },
                        {
                          name: "prefixIds",
                          params: {
                            prefixClassNames: false,
                          },
                        },
                      ],
                    },
                    titleProp: true,
                  },
                },
                {
                  loader: "shell-loader",
                  options: {
                    script: `python ${createSVGScriptPath}`,
                  },
                },
                {
                  loader: path.resolve(__dirname, "depender"),
                },
              ],
            },
          ],
        },
      };
    },
  };
};
