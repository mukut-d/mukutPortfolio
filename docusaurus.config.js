// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Mukut's Portfolio",
  tagline: "Currently playing The Ghost of Tsushima",
  favicon: "img/atomic.png",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Home",
        logo: {
          alt: "Atom",
          src: "img/atomic.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Projects",
          },
          // { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/mukut-d",
            label: "GitHub",
            position: "right",
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
                label: "Portfolio",
                to: "/portfolio/intro",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/mukut-das/",
              },
            ],
          },
          {
            title: "Online Presence",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/users/19906442/mukut-d",
              },
              {
                label: "CodeChef",
                href: "https://www.codechef.com/users/the_cubi5t",
              },
              {
                label: "Leetcode",
                href: "https://leetcode.com/mukut-d/",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Resume",
                href: "https://drive.google.com/file/d/1aTEqTYIP1QgjIHqpko5QY4EEE4xiHOoJ/view?usp=sharing",
              },
              {
                label: "GeekForGeeks",
                href: "https://www.geeksforgeeks.org/user/mukutmdas2000/",
                // to: '/blog',
              },
              {
                label: "HackerRank",
                href: "https://www.hackerrank.com/profile/the_cubi5t",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Mukutmani Das. Built with Docusaurus. Icons from Flaticons`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
