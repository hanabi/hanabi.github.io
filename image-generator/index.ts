// This is a Docusaurus plugin to automatically create SVG images from the YAML files located in the
// "image-generator/yml" directory. This is triggered whenever the website is built.

import type { Plugin } from "@docusaurus/types";
import { dirName, getPythonCommand } from "isaacscript-common-node";
import path from "node:path";

const __dirname = dirName();
const createSVGScriptPath = path.join(__dirname, "create_svg.py");
const pythonCommand = getPythonCommand(true);

export default function hanabiDocusaurusPlugin(): Plugin {
  return {
    name: "hanabi-docusaurus-plugin",

    configureWebpack(_config, _isServer, _utils) {
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
                  loader: path.join(__dirname, "depender.js"),
                },
              ],
            },
          ],
        },
      };
    },
  };
}
