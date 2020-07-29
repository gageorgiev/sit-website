module.exports = {
  siteMetadata: {
    title: `С.И.Т.`,
    description: `Строителна фирма С.И.Т. ООД`,
    author: `@gabrielgeorgiev1998`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-tailwind--serif`,
        short_name: `serif`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#e31e25`,
        display: `minimal-ui`,
        icon: `static/favicon.png`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'services'
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
