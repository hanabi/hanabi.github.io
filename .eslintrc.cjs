// This is the configuration file for ESLint, the TypeScript linter:
// https://eslint.org/docs/latest/use/configure/

/** @type {import("eslint").Linter.Config} */
const config = {
  extends: [
    // The linter base is the shared IsaacScript config:
    // https://github.com/IsaacScript/isaacscript/blob/main/packages/eslint-config-isaacscript/base.js
    "eslint-config-isaacscript/base",
  ],

  // Don't bother linting the compiled output.
  // @template-ignore-next-line
  ignorePatterns: ["**/.docusaurus/**", "**/build/**"],

  parserOptions: {
    // ESLint needs to know about the project's TypeScript settings in order for TypeScript-specific
    // things to lint correctly.
    project: "./tsconfig.json",
  },

  rules: {
    // Insert changed or disabled rules here, if necessary.
  },
};

module.exports = config;
