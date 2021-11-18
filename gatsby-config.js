module.exports = {
  siteMetadata: {
    siteUrl: "https://gabstevens.com",
    title: "gabstevens"
  },
  plugins: [
    {
      resolve: "gatsby-plugin-s3",
      options: {
        bucketName: "gabstevens",
        region: "eu-central-1"
      }
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ["G-KLFBQ9W7EN"],
        pluginConfig: {
          head: true
        }
      }
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sass",
    "gatsby-plugin-web-font-loader",
    "gatsby-plugin-react-helmet"
  ]
};
