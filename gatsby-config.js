module.exports = {
  siteMetadata: {
    title: `SwiftUI Docs`,
    description: ``,
    author: `@yihwan`,
  },
  plugins: [
    `gatsby-theme-docz`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/images`,
      },
    },
  ],
}
