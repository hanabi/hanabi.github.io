module.exports = {
  title: 'The Hyphen-ated Conventions',
  url: 'https://hyphenated.github.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: '',
  projectName: 'hanabi-conventions',
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
    },
    navbar: {
      title: 'Hyphen-ated Conventions',
      logo: {
        alt: 'My Site Logo',
        src: 'img/hyphenated.png',
      },
      items: [
        {
          to: 'docs/about/',
          activeBasePath: 'docs',
          label: 'About',
          position: 'left',
        },
        {
          href: 'https://github.com/Zamiell/hanabi-conventions',
          label: 'GitHub Repo',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Built with <a href="https://v2.docusaurus.io/">Docusaurus</a>.`,
    },
    sidebarCollapsible: false,
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/Zamiell/hanabi-conventions/edit/main/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  scripts: [
    {
      src: 'https://kit.fontawesome.com/1932a73877.js',
      crossorigin: "anonymous",
    },
  ],
};
