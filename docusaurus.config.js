// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'asgharlabs.github.io',
  tagline: 'Lets see if this actually does what I want',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
	url: 'https://asgharlabs.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'asgharlabs', // Usually your GitHub org/user name.
  projectName: 'asgharlabs.github.io', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

	plugins: [
		[
			"docusaurus-plugin-remote-content",
            {
                // options here
                name: "llm-d", // used by CLI, must be path safe
                sourceBaseUrl: "https://raw.githubusercontent.com/llm-d/llm-d/refs/heads/dev/", // the base url for the markdown (gets prepended to all of the documents when fetching)
                outDir: "docs/llm-d/", // the base directory to output to.
                documents: ["README.md"], // the file names to download
            },
		],
		[
			"docusaurus-plugin-remote-content",
            {
                // options here
                name: "llm-d-benchmark", // used by CLI, must be path safe
                sourceBaseUrl: "https://raw.githubusercontent.com/llm-d/llm-d-benchmark/refs/heads/main/", // the base url for the markdown (gets prepended to all of the documents when fetching)
                outDir: "docs/llm-d-benchmark/", // the base directory to output to.
                documents: ["README.md"], // the file names to download
            },
		],
		[
			"docusaurus-plugin-remote-content",
            {
                // options here
                name: "llm-d-inference-scheduler", // used by CLI, must be path safe
                sourceBaseUrl: "https://raw.githubusercontent.com/llm-d/llm-d-inference-scheduler/refs/heads/main/", // the base url for the markdown (gets prepended to all of the documents when fetching)
                outDir: "docs/llm-d-inference-scheduler/", // the base directory to output to.
                documents: ["README.md"], // the file names to download
            },
		],
		[
			"docusaurus-plugin-remote-content",
            {
                // options here
                name: "llm-d-inference-sim", // used by CLI, must be path safe
                sourceBaseUrl: "https://raw.githubusercontent.com/llm-d/llm-d-inference-sim/refs/heads/main/", // the base url for the markdown (gets prepended to all of the documents when fetching)
                outDir: "docs/llm-d-inference-sim/", // the base directory to output to.
                documents: ["README.md"], // the file names to download
            },
		],
		[
			"docusaurus-plugin-remote-content",
            {
                // options here
                name: "llm-d-kv-cache-manager", // used by CLI, must be path safe
                sourceBaseUrl: "https://raw.githubusercontent.com/llm-d/llm-d-kv-cache-manager/refs/heads/main/", // the base url for the markdown (gets prepended to all of the documents when fetching)
                outDir: "docs/llm-d-kv-cache-manager/", // the base directory to output to.
                documents: ["README.md"], // the file names to download
            },
		],
		[
			"docusaurus-plugin-remote-content",
            {
                // options here
                name: "llm-d-deployer", // used by CLI, must be path safe
                sourceBaseUrl: "https://raw.githubusercontent.com/llm-d/llm-d-deployer/refs/heads/main/", // the base url for the markdown (gets prepended to all of the documents when fetching)
                outDir: "docs/llm-d-deployer/", // the base directory to output to.
                documents: ["README.md"], // the file names to download
            },
		],
		[
			"docusaurus-plugin-remote-content",
            {
                // options here
                name: "llm-d-model-service", // used by CLI, must be path safe
                sourceBaseUrl: "https://raw.githubusercontent.com/llm-d/llm-d-model-service/refs/heads/main/", // the base url for the markdown (gets prepended to all of the documents when fetching)
                outDir: "docs/llm-d-model-service/", // the base directory to output to.
                documents: ["README.md"], // the file names to download
            },
		],
		[
			"docusaurus-plugin-remote-content",
            {
                // options here
                name: "llm-d-routing-sidecar", // used by CLI, must be path safe
                sourceBaseUrl: "https://raw.githubusercontent.com/llm-d/llm-d-routing-sidecar/refs/heads/main/", // the base url for the markdown (gets prepended to all of the documents when fetching)
                outDir: "docs/llm-d-routing-sidecar/", // the base directory to output to.
                documents: ["README.md"], // the file names to download
            },
		],
		[
			"docusaurus-plugin-remote-content",
            {
                // options here
                name: "llm-d-pd-utils", // used by CLI, must be path safe
                sourceBaseUrl: "https://raw.githubusercontent.com/llm-d/llm-d-pd-utils/refs/heads/main/", // the base url for the markdown (gets prepended to all of the documents when fetching)
                outDir: "docs/llm-d-pd-utils/", // the base directory to output to.
                documents: ["README.md"], // the file names to download
            },
		],
	],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/asgharlabs/asgharlabs.github.io/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/asgharlabs/asgharlabs.github.io/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
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
        title: 'My Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'X',
                href: 'https://x.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
