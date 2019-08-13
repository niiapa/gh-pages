module.exports = {
    siteMetadata: {
        title: `Nii Apa`,
        description: `A me nii website`,
        author: `Nii Apa Abbey`,
        twitterHandle: '@niiapa',
        socials: [
            {
                name: 'github',
                url: 'https://github.com/niiapa'
            },
            {
                name: 'twitter',
                url: 'https://twitter.com/niiapa'
            },
            {
                name: 'instagram',
                url: 'https://instagram.com/niiapa'
            },
            {
                name: 'spotify',
                url: 'https://open.spotify.com/user/niiapa?si=oESrQQt-QuOSkawLRfFVZw'
            },
            {
                name: 'wordpress',
                url: 'https://abbeyabyss.wordpress.com'
            },
            {
                name: 'soundcloud',
                url: 'https://soundcloud.com/dj-abbey-gh'
            },
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
                    }
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
        `gatsby-plugin-sass`
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
