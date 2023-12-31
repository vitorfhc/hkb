// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Hacking Knowledge Base',
  tagline: 'Busfactor\'s hacking knowledge base',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://vitorfhc.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/hkb/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'vitorfhc', // Usually your GitHub org/user name.
  projectName: 'hkb', // Usually your repo name.
  deploymentBranch: 'gh-pages', // The branch of your docs repo that you are publishing to GitHub pages

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'HKB',
        logo: {
          alt: 'HKB Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            href: 'https://github.com/vitorfhc/hkb',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'External Links',
            items: [
              {
                label: 'Personal Website',
                href: 'https://vitorfalcao.com',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/busf4ctor',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/vitorfhc',
              },
            ],
          }
        ],
        copyright: `Built by Vitor Falcao (aka busfactor) using Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['powershell', 'batch'],
      },
    }),
};

module.exports = config;
