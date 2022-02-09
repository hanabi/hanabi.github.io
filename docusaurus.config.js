const path = require("path");

module.exports = {
  title: "The H-Group Conventions",
  url: "https://hanabi.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "hanabi",
  projectName: "hanabi.github.io",
  themeConfig: {
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

    // Extra settings
    algolia: {
      apiKey: "d78c09bd651631ef68e85a10a605d1e8",
      indexName: "hanabi-conventions",
      contextualSearch: false, // Only useful for versioned sites, e.g. docs for v1, v2
    },
    colorMode: {
      defaultMode: "dark",
    },
    hideableSidebar: true,
  },
  plugins: [path.resolve(__dirname, "image-generator")],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/hanabi/hanabi.github.io/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  scripts: [
    {
      src: "https://kit.fontawesome.com/1932a73877.js",
      crossorigin: "anonymous",
    },
    "/js/hotkey.js",
  ],
};
