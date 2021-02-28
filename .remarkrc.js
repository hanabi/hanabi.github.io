module.exports = {
  "plugins": [
    // Use the recommended presets by remark
    // https://github.com/remarkjs/remark-lint#list-of-presets
    "remark-preset-lint-consistent",
    "remark-preset-lint-markdown-style-guide",
    "remark-preset-lint-recommended",

    // Load additional external rules recommended by remark
    // https://github.com/remarkjs/remark-lint#list-of-external-rules
    "remark-lint-match-punctuation",

    // Load additional external rules that we explicitly want to have for this project
    "remark-lint-no-tabs",
    "remark-lint-no-trailing-spaces",
    "remark-validate-links",

    // Load retext linters to lint English
    [
      // Parse the Markdown as English using retext
      require("remark-retext"),
      require("unified")()
        .use(require("retext-english"))

        // Parse common kinds of syntax
        .use(require("retext-syntax-mentions"))
        .use(require("retext-syntax-urls"))

        // Load linters
        .use(require("retext-diacritics"))
        .use(require("retext-indefinite-article"))
        .use(require("retext-redundant-acronyms"))
        .use(require("retext-repeated-words"))
        .use(require("retext-sentence-spacing"))
    ],

    // Disable some rules that are enabled by the presets above
    ["remark-lint-heading-style", false],
    ["remark-lint-list-item-indent", false],
    ["remark-lint-list-item-spacing", false],
    ["remark-lint-maximum-heading-length", false],
    ["remark-lint-maximum-line-length", false],
  ]
}
