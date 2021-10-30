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
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sass",
    "gatsby-plugin-web-font-loader"
  ]
};
