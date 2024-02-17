require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
import type { GatsbyConfig } from "gatsby";

console.log(`MODE : ${process.env.NODE_ENV}`);

const config: GatsbyConfig = {
  siteMetadata: {
    title: `RockItGatsby`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.STRAPI_API_URL,
        accessToken: process.env.TOKEN,
        collectionTypes: [
          "dancer",
          "event",
          "event-type",
          "schedule-entry",
        ],
      },
    },
  ]
};

export default config;
