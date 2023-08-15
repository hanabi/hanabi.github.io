const path = require("node:path");

/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
const themeConfig = {
  // Vanilla components
  navbar: {
    title: "H-Group Conventions",
    logo: {
      alt: "H-Group Logo",
      src: "img/logo.png",
    },
    items: [
      {
        to: "docs/beginner",
        activeBasePath: "docs",
        label: "Beginner",
        position: "left",
      },
      {
        to: "docs/learning-path",
        activeBasePath: "docs",
        label: "Learning Path",
        position: "left",
      },
      {
        to: "docs/reference",
        activeBasePath: "docs",
        label: "Reference",
        position: "left",
      },
      {
        to: "docs/variant-specific",
        activeBasePath: "docs",
        label: "Variant-Specific",
        position: "left",
      },
      {
        href: "https://github.com/hanabi/hanabi.github.io/",
        label: "Repo",
        position: "right",
      },
      {
        href: "https://github.com/hanabi/hanabi.github.io/issues",
        label: "Proposals",
        position: "right",
      },
    ],
  },

  docs: {
    sidebar: {
      hideable: true,
    },
  },

  // Extra settings
  algolia: {
    appId: "24AGYEOQ7J", // cspell:disable-line
    apiKey: "7e647fd7de142915da9f459b345dfca4",
    indexName: "hanabi-conventions",
    contextualSearch: false, // Enabled by default; only useful for versioned sites.
  },

  colorMode: {
    defaultMode: "dark",
  },
};

/** @type {import('@docusaurus/preset-classic').Options} */
const presetsClassicOptions = {
  docs: {
    sidebarPath: require.resolve("./sidebars.js"),
    editUrl: "https://github.com/hanabi/hanabi.github.io/edit/main/",
  },
  theme: {
    customCss: require.resolve("./src/css/custom.css"),
  },
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "H-Group Conventions",
  favicon: "img/favicon.ico",

  url: "https://hanabi.github.io",
  baseUrl: "/",

  organizationName: "hanabi",
  projectName: "hanabi.github.io",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  presets: [["classic", presetsClassicOptions]],
  themeConfig,

  // Added fields from vanilla.
  plugins: [path.resolve(__dirname, "image-generator")],
  scripts: [
    {
      src: "https://kit.fontawesome.com/1932a73877.js",
      crossorigin: "anonymous",
    },
    "/js/hotkey.js",
  ],
};

module.exports = config;
