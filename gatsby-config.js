/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://doc.dqa.sch.id`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-postcss`,
    {
      resolve: 'gatsby-plugin-use-dark-mode',
      options: {
        classNameDark: 'dark',
        classNameLight: 'light',
        storageKey: 'theme',
        minify: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Darul Quran Aceh",
        short_name: "DQA",
        start_url: "/",
        background_color: "#77bf43",
        theme_color: "#dbaa27",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/logo.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        // A unique name for the search index. This should be descriptive of
        // what the index contains. This is required.
        name: 'pages',
        engine: 'flexsearch',
        engineOptions: 'speed',
        query: `
          {
            allMdx(sort: {frontmatter: {order: ASC}}) {
              nodes {
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                }
                body
              }
            }
          }
        `,
        ref: 'id',
        index: ['title', 'body'],
        store: ['id', 'path', 'title'],
        normalizer: ({ data }) =>
          data.allMdx.nodes.map((node) => ({
            id: node.id,
            path: `/${node.fields.slug}`,
            title: node.frontmatter.title,
            body: node.body,
          })),
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-images`,
        ],
      },
    },
    // Add a collection called "content" that looks
    // for files in folder content.
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
  ],
}
