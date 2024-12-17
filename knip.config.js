// This is the configuration file for Knip:
// https://knip.dev/overview/configuration

// @ts-check

/** @type {import("knip").KnipConfig} */
const config = {
  // @template-customization-start
  // There is no Knip Docusaurus plugin:
  // https://github.com/webpro-nl/knip/issues/483#issuecomment-2073024263
  entry: [
    "docusaurus.config.ts",
    "sidebars.ts",
    "src/beginnersGuide.tsx",
    "src/pages/index.tsx",
    "plugins/hanabiDocusaurusPlugin/index.ts",
    "plugins/hanabiDocusaurusPlugin/plugin/src/convertYAMLToSVG.ts",
    "static/js/hotkey.js",
  ],
  // @template-customization-end
  ignore: [
    "eslint.config.mjs", // ESLint is provided by "complete-lint".
    "prettier.config.mjs", // Prettier is provided by "complete-lint".
    // @template-customization-start
    "babel.config.cjs",
    // @template-customization-end
  ],
  ignoreBinaries: [
    "tsx", // This is provided by "complete-lint".
    // @template-customization-start
    "prettier", // This is provided by "complete-lint".
    // @template-customization-end
  ],
  ignoreDependencies: [
    "complete-lint", // This is a linting meta-package.
    // @template-customization-start
    "prism-react-renderer",
    "raw-loader",
    "webpack",
    "@docusaurus/faster",
    "@docusaurus/Link",
    "@docusaurus/theme-mermaid",
    "@docusaurus/types",
    "@docusaurus/plugin-content-docs",
    "@docusaurus/useBaseUrl",
    "@docusaurus/useDocusaurusContext",
    "@theme/Layout",
    // @template-customization-end
  ],
};

export default config;
