module.exports = {
  siteMetadata: {
    title: `SwiftUI Docs`,
    description: `An unofficial guide to Apple's SwiftUI.`,
    author: `@yihwan`,
  },
  plugins: [
    `gatsby-plugin-theme-ui`,
    `gatsby-theme-docz`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `SwiftUI Docs`,
        short_name: `SwiftUI`,
        start_url: `/`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
  ],
}
