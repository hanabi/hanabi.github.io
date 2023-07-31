/* eslint-disable import/no-extraneous-dependencies */

import remarkRetext from "remark-retext";
import retextDiacritics from "retext-diacritics";
import retextEnglish from "retext-english";
import retextIndefiniteArticle from "retext-indefinite-article";
import retextRedundantAcronyms from "retext-redundant-acronyms";
import retextRepeatedWords from "retext-repeated-words";
import retextSyntaxMentions from "retext-syntax-mentions";
import retextSyntaxURLs from "retext-syntax-urls";
import { unified } from "unified";

const config = {
  plugins: [
    // Use the recommended presets by remark:
    // https://github.com/remarkjs/remark-lint#presets
    "remark-preset-lint-consistent",
    "remark-preset-lint-markdown-style-guide",
    "remark-preset-lint-recommended",

    // Load additional external rules recommended by remark:
    // https://github.com/remarkjs/remark-lint#list-of-external-rules
    "remark-lint-match-punctuation",

    // Load additional external rules that we explicitly want to have for this project.
    "remark-lint-no-tabs",
    "remark-lint-no-trailing-spaces",
    "remark-validate-links",

    // Load retext linters to lint English.
    [
      // Parse the Markdown as English using retext.
      remarkRetext,
      unified()
        .use(retextEnglish)

        // Parse common kinds of syntax.
        .use(retextSyntaxMentions)
        .use(retextSyntaxURLs)

        // Load linters.
        .use(retextDiacritics)
        .use(retextIndefiniteArticle)
        .use(retextRedundantAcronyms)
        .use(retextRepeatedWords),
    ],

    // Disable some rules that are enabled by the presets above.
    ["remark-lint-emphasis-marker", false],
    ["remark-lint-heading-style", false],
    ["remark-lint-list-item-content-indent", false],
    ["remark-lint-list-item-indent", false],
    ["remark-lint-list-item-spacing", false],
    ["remark-lint-maximum-heading-length", false],
    ["remark-lint-maximum-line-length", false],
  ],
};
export default config;
