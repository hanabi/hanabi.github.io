// This is the configuration file for Knip:
// https://knip.dev/overview/configuration

// @ts-check

/** @type {import("knip").KnipConfig} */
const config = {
  // There is no Knip Docusaurus plugin:
  // https://github.com/webpro-nl/knip/issues/483#issuecomment-2073024263
  // @template-customization-start
  entry: [
    "docusaurus.config.ts",
    "sidebars.ts",
    "image-generator/index.ts",
    "src/beginnersGuide.tsx",
    "src/pages/index.tsx",
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
    "complete-tsconfig", // This is provided by "complete-lint".
    // @template-customization-start
    "prism-react-renderer",
    "raw-loader",
    "webpack",
    "@docusaurus/types",
    "@docusaurus/plugin-content-docs",
    "@docusaurus/useBaseUrl",
    "@docusaurus/Link",
    "@docusaurus/useDocusaurusContext",
    "@theme/Layout",
    "@docusaurus/module-type-aliases",
    "@docusaurus/theme-classic",
    "node", // This is provided by "complete-lint".
    // @template-customization-end
  ],
};

export default config;
