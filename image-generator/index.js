// This is a Docusaurus plugin to automatically create SVG images from the YAML files located in the
// "image-generator/yml" directory. This is triggered whenever the website is built.

const path = require("node:path");
const commandExists = require("command-exists");

const pythonExists = commandExists.sync("python");
const pythonExists3 = commandExists.sync("python3");

let pythonCommand;
if (pythonExists3) {
  pythonCommand = "python3";
} else if (pythonExists) {
  pythonCommand = "python";
} else {
  throw new Error(
    "You must have Python installed and available in the PATH to run this website.",
  );
}

// "python3" will exist on Windows but is not actually a real version of Python, generating the
// following output: Python was not found; run without arguments to install from the Microsoft
// Store, or disable this shortcut from Settings > Manage App Execution Aliases.
if (process.platform === "win32") {
  pythonCommand = "python";
}

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
                    script: `${pythonCommand} ${createSVGScriptPath}`,
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
