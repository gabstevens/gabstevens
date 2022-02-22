module.exports = {
  siteMetadata: {
    siteUrl: "https://gabstevens.dev",
    title: "Gabriele Stefani"
  },
  plugins: [
    {
      resolve: "gatsby-plugin-s3",
      options: {
        bucketName: "gabstevens.dev",
        region: "eu-central-1",
        protocol: "https",
        hostname: "gabstevens.dev",
        acl: null
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
    {
      resolve: "gatsby-plugin-canonical-urls",
      options: {
        siteUrl: "https://gabstevens.dev"
      }
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sass",
    "gatsby-plugin-web-font-loader",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Gabriele Stefani",
        short_name: "GabStevens",
        start_url: "/",
        background_color: "#0C0F16",
        theme_color: "#0C0F16",
        display: "standalone",
        icon: "src/assets/profile_image.jpg",
        icon_options: {
          purpose: "any maskable"
        }
      }
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        precachePages: ["*"]
      }
    }
  ]
};
