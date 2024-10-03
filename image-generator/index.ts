// This is a Docusaurus plugin to automatically create SVG images from the YAML files located in the
// "image-generator/yml" directory. This is triggered whenever the website is built.

import type { Plugin } from "@docusaurus/types";
import path from "node:path";
import url from "node:url";

/**
 * Using `import.meta.dirname` here results in an error while building:
 *
 * "SyntaxError: Cannot use 'import.meta' outside a module"
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default function hanabiDocusaurusPlugin(): Plugin {
  return {
    name: "hanabi-docusaurus-plugin",

    configureWebpack(_config, _isServer, _utils) {
      return {
        module: {
          rules: [
            {
              test: /\.yml$/,
              use: [
                // Convert the SVG to a React component:
                // https://github.com/gregberge/svgr/tree/main
                {
                  loader: "@svgr/webpack",
                  options: {
                    svgo: false, // Using the SVG Optimizer results in non-white player names.
                  },
                },

                // Generate an SVG based on the YAML file. (This must be after "@svgr/webpack".)
                {
                  loader: path.join(__dirname, "create_svg.cjs"),
                },
              ],
            },
          ],
        },
      };
    },
  };
}
