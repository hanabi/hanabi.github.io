// This is the configuration file for ESLint, the TypeScript linter:
// https://eslint.org/docs/latest/use/configure/

// @ts-check

import { completeConfigBase } from "eslint-config-complete"; // eslint-disable-line import-x/no-extraneous-dependencies
import tseslint from "typescript-eslint"; // eslint-disable-line import-x/no-extraneous-dependencies

export default tseslint.config(
  // https://github.com/complete-ts/complete/blob/main/packages/eslint-config-complete/src/base.js
  ...completeConfigBase,

  {
    rules: {
      // Insert changed or disabled rules here, if necessary.

      // @template-customization-start

      // Docusaurus is stuck on ESM. Remove this when "package.json" can be converted:
      // https://github.com/facebook/docusaurus/issues/6520
      "n/file-extension-in-import": "off",

      // @template-customization-end
    },
  },

  // @template-customization-start

  // Do not lint the compiled output.
  {
    ignores: ["**/.docusaurus/", "**/build/"],
  },

  // @template-customization-end
);
