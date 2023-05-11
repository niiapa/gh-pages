module.exports = {
    trailingSlash: 'never',
    siteMetadata: {
        title: `Nii Apa`,
        description: `A mi-nii website`,
        author: `Nii Apa Abbey`,
        twitterHandle: '@niiapa',
        socials: [
            {
                name: 'instagram',
                url: 'https://instagram.com/niiapa'
            },
            {
                name: 'twitter',
                url: 'https://twitter.com/niiapa'
            },
            {
                name: 'spotify',
                url: 'https://open.spotify.com/user/niiapa?si=oESrQQt-QuOSkawLRfFVZw'
            },
            {
                name: 'github',
                url: 'https://github.com/niiapa'
            },
            // {
            //     name: 'apple music',
            //     url: 'https://itunes.apple.com/profile/niiapa'
            // },
            // {
            //     name: 'wordpress',
            //     url: 'https://abbeyabyss.wordpress.com'
            // },
            // {
            //     name: 'soundcloud',
            //     url: 'https://soundcloud.com/dj-abbey-gh'
            // },
        ]
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `markdown-pages`,
                path: `${__dirname}/src/markdown-pages`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    `gatsby-remark-copy-linked-files`,
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            // It's important to specify the maxWidth (in pixels) of
                            // the content container as this plugin uses this as the
                            // base for generating different widths of each image.
                            maxWidth: 700,
                            quality: 100,
                            linkImagesToOriginal: true,
                            backgroundColor: `#141414`
                        }
                    },
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            // Class prefix for <pre> tags containing syntax highlighting;
                            // defaults to 'language-' (e.g. <pre class="language-js">).
                            // If your site loads Prism into the browser at runtime,
                            // (e.g. for use with libraries like react-live),
                            // you may use this to prevent Prism from re-processing syntax.
                            // This is an uncommon use-case though;
                            // If you're unsure, it's best to use the default value.
                            classPrefix: "language-",
                            // This is used to allow setting a language for inline code
                            // (i.e. single backticks) by creating a separator.
                            // This separator is a string and will do no white-space
                            // stripping.
                            // A suggested value for English speakers is the non-ascii
                            // character '›'.
                            inlineCodeMarker: null,
                            // This lets you set up language aliases.  For example,
                            // setting this to '{ sh: "bash" }' will let you use
                            // the language "sh" which will highlight using the
                            // bash highlighter.
                            aliases: {},
                            // This toggles the display of line numbers globally alongside the code.
                            // To use it, add the following line in gatsby-browser.js
                            // right after importing the prism color scheme:
                            //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
                            // Defaults to false.
                            // If you wish to only show line numbers on certain code blocks,
                            // leave false and use the {numberLines: true} syntax below
                            showLineNumbers: false,
                            // If setting this to true, the parser won't handle and highlight inline
                            // code used in markdown i.e. single backtick code like `this`.
                            noInlineHighlight: false,
                            // Customize the prompt used in shell output
                            // Values below are default
                            prompt: {
                                user: "root",
                                host: "localhost",
                                global: false,
                            },
                            // By default the HTML entities <>&'" are escaped.
                            // Add additional HTML escapes by providing a mapping
                            // of HTML entities and their escape value IE: { '}': '&#123;' }
                            escapeEntities: {},
                        },
                    },
                ],
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `niiapa-github-io`,
                short_name: `niiapa-ghpages`,
                start_url: `/`,
                background_color: `#141414`,
                theme_color: `#141414`,
                display: `minimal-ui`,
                icon: `src/images/avatar.JPG`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-sass`,
        `gatsby-plugin-image`,
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
