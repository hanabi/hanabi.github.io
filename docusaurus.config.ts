import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";

const config: Config = {
  title: "H-Group Conventions",
  tagline: undefined,
  favicon: "img/favicon.ico",

  url: "https://hanabi.github.io",
  baseUrl: "/",

  // With the default (undefined), Docusaurus emits pages as "/path/index.html" but writes
  // canonical/sitemap/og URLs without a trailing slash, so GitHub Pages 301-redirects "/path" to
  // "/path/". The Algolia crawler then follows the sitemap into those redirects (whose canonical
  // points back at the redirecting URL) and drops every page, collapsing the index to 1 record.
  // Setting this to false emits "/path.html", which GitHub Pages serves directly at "/path" with no
  // redirect and no canonical mismatch, while keeping the same no-slash URLs (so relative links
  // resolve unchanged).
  trailingSlash: false,

  organizationName: "hanabi",
  projectName: "hanabi.github.io",

  onBrokenAnchors: "throw",
  onBrokenLinks: "throw",
  onDuplicateRoutes: "throw",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/", // Serve the docs at the site's root.
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/hanabi/hanabi.github.io/edit/main/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: "H-Group Conventions",
      logo: {
        alt: "H-Group Logo",
        src: "img/logo.png",
      },
      items: [
        {
          to: "beginner",
          activeBasePath: "docs",
          label: "Beginner",
          position: "left",
        },
        {
          to: "learning-path",
          activeBasePath: "docs",
          label: "Learning Path",
          position: "left",
        },
        {
          to: "reference",
          activeBasePath: "docs",
          label: "Reference",
          position: "left",
        },
        {
          to: "variant-specific",
          activeBasePath: "docs",
          label: "Variant-Specific",
          position: "left",
        },
        {
          href: "https://github.com/hanabi/hanabi.github.io/",
          className: "header-github-link",
          position: "right",
        },
        {
          href: "https://discord.gg/FADvkJp",
          className: "header-discord-link",
          position: "right",
        },
      ],
    },

    docs: {
      sidebar: {
        hideable: true,
      },
    },

    algolia: {
      appId: "24AGYEOQ7J", // cspell:disable-line
      apiKey: "7e647fd7de142915da9f459b345dfca4",
      indexName: "hanabi-conventions",
      contextualSearch: false, // Enabled by default; only useful for versioned sites.
    },

    colorMode: {
      defaultMode: "dark",
    },
  } satisfies Preset.ThemeConfig,

  // -------------------------
  // Added fields from vanilla
  // -------------------------

  plugins: ["./plugins/hanabiDocusaurusPlugin/index.ts"],
  scripts: [
    // Font Awesome is used for the icons on the landing page.
    // https://fontawesome.com/kits/1932a73877/setup
    {
      src: "https://kit.fontawesome.com/1932a73877.js",
      crossorigin: "anonymous",
    },

    // We provide some keyboard shortcuts for easier navigation.
    "/js/hotkey.js",
  ],
  future: {
    faster: true,
    v4: true,
  },

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "throw",
    },

    // Enable Mermaid diagrams:
    // https://docusaurus.io/docs/markdown-features/diagrams
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
};

export default config;
