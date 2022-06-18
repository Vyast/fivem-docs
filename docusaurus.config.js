// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "vyast.dev Scripts",
  tagline: "Official Documentation Site",
  url: "https://docs.vyast.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "vyast.dev", // Usually your GitHub org/user name.
  projectName: "fivem-docs", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/Vyast/fivem-docs/pulls",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // algolia: {
      //   appId: "YOUR_APP_ID",
      //   apiKey: "YOUR_SEARCH_API_KEY",
      //   indexName: "YOUR_INDEX_NAME",
      //   contextualSearch: true,
      // },
      announcementBar: {
        id: "extra_info",
        content:
          "NOTE: Some written features for v-queue may not be released yet. Looking for the VenomAC documentation? <a target='_blank' rel='noopener noreferrer' href='https://docs.venomac.com'>Click Here</a>",
        backgroundColor: "#fafbfc",
        textColor: "#091E42",
        isCloseable: false,
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "vyast.dev",
        logo: {
          alt: "Logo",
          src: "img/black64.png",
          srcDark: "img/white64.png",
        },
        items: [
          {
            type: "doc",
            docId: "faq",
            position: "left",
            label: "Documentation",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
          {
            href: "https://github.com/Vyast/fivem-docs",
            position: "right",
            className: "header-github-link",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "FAQ",
                to: "/docs/faq",
              },
              {
                label: "Asset Escrow",
                to: "/docs/escrow",
              },
              {
                label: "Terms of Service",
                to: "/docs/tos",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/vyast",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Tebex Store",
                href: "https://store.vyast.dev",
              },
              {
                label: "Venom Anti-Cheat",
                href: "https://venomac.com",
              },
              {
                label: "GitHub",
                href: "https://github.com/Vyast",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} vyast.dev Inc. All Rights Reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["lua"],
      },
    }),
};

module.exports = config;
