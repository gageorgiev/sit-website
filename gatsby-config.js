module.exports = {
  siteMetadata: {
    title: `С.И.Т.`,
    description: `Строителна фирма С.И.Т. ООД`,
    author: `@gabrielgeorgiev1998`,
    siteUrl: `https://master.d29u0a5lu86afn.amplifyapp.com`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `sit-website`,
        short_name: `sit`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#aaaaaa`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'services'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-postcss',
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        purgeOnly: ["src/css/style.css"]
      }
    },
    'gatsby-plugin-offline',
    {
      resolve: "gatsby-plugin-prefetch-google-fonts",
      options: {
        fonts: [
          {
            family: 'Manrope',
            variants: ['400']
          },
          {
            family: 'Roboto',
            variants: ['300', '400']
          },
          {
            family: 'Playfair Display SC',
            variants: ['700']
          }
        ],
      },
    }
  ]
};
