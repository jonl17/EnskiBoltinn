/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Enski Boltinn`,
    menuitems: [`Home`, `Live Score`, `Results`, `About`, `Contact`],
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: `${__dirname}/static/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `people`,
        path: `${__dirname}/static/people/`,
      },
    },
  ],
}
