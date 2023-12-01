import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import path from "node:path";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const config: Config = {
  title: "H-Group Conventions",
  tagline: undefined,
  favicon: "img/favicon.ico",

  url: "https://hanabi.github.io",
  baseUrl: "/",

  organizationName: "hanabi",
  projectName: "hanabi.github.io",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

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
    // Vanilla components
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
  } satisfies Preset.ThemeConfig,

  // -------------------------
  // Added fields from vanilla
  // -------------------------

  plugins: [path.resolve(__dirname, "image-generator")],
  scripts: [
    {
      src: "https://kit.fontawesome.com/1932a73877.js",
      crossorigin: "anonymous",
    },
    "/js/hotkey.js",
  ],
};

export default config;
