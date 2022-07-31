/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config();
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  proxy: {
    prefix: "/api",
    url: "https://api.linkedin.com/v2/me",
  },
  siteMetadata: {
    title: `UNSW Mentem`,
    description: `UNSW is dedicated to building a stronger workforce through reskilling and upskilling at scale, in order to future proof the nation's talent.`,
    twitterUsername: `@gatsbyjs`,
    image: `src/assets/img/logo.png`,
    author: `UNSW Mentem`,
    siteUrl: `https://www.yourdomain.tld`,
    favicon: "src/assets/img/favicon.png",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `UNSW`,
        short_name: `UNSW`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/assets/img/favicon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,

    {
      resolve: "gatsby-source-contentful",
      options: {
        // downloadLocal: true,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        // host: process.env.CONTENTFUL_HOST,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/db.json`,
      },
    },
  ],
};
