module.exports = {
    title: 'Bot',
    tagline: 'React/Vue快速开发模版',
    url: 'https://bot.zzfzzf.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    favicon: 'img/favicon.ico',
    organizationName: 'FykjFE', // Usually your GitHub org/user name.
    projectName: 'Bot', // Usually your repo name.
    themeConfig: {
        navbar: {
            title: 'Bot Of Template',
            logo: {
                alt: 'My Site Logo',
                src: 'img/logo.svg',
            },
            items: [
                {
                    to: 'docs/react',
                    activeBasePath: 'react',
                    label: 'React',
                    position: 'right',
                },
                {
                    to: 'docs/vue2',
                    activeBasePath: 'vue2',
                    label: 'Vue2',
                    position: 'right',
                },
                // {href: 'https://bot-demo.zzfzzf.com/form/list', label: 'React预览', position: 'right'},
                {
                    href: 'https://github.com/FykjFE/bot',
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
                            label: 'Style Guide',
                            to: 'docs/',
                        },
                        {
                            label: 'Second Doc',
                            to: 'docs/',
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
                            label: 'Twitter',
                            href: 'https://twitter.com/docusaurus',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        // {
                        //     label: 'Blog',
                        //     to: 'blog',
                        // },
                        // {
                        //     label: 'GitHub',
                        //     href: 'https://github.com/facebook/docusaurus',
                        // },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} FykjFE, Inc.`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.json'),
                    editUrl:
                        'https://github.com/FykjFE/bot-doc/edit/master/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};
