/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

let activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

console.log('Using environment config: ${activeEnv}')

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})


module.exports = {
  /* Your site config here */
  siteMetadata:{
    title: 'Full-Stack Bootcamp!',
    author: 'Emeka Eluwa'
  },
  plugins: [
    'gatsby-plugin-sass'
  ]
}
