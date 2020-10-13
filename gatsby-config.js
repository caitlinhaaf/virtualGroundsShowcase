module.exports = {
  siteMetadata: {
    title: `Virtual Grounds Showcase`,
    description: `A series dedicated to feminist perspectives on digital sustainability and survival presented by Trinity Square Video and the Digital Justice Lab. Virtual Grounds is a 2-part training and research initiative that considers how we navigate the future, protect our virtual selves, and shape digital landscapes. Over the course of 11 months, we will survey how technology continues to grow and impact our lives in different ways through a series of workshops led by practicing creative technologists, scholars, and artists. The content and research created will then be compiled into a transmedia publication, which will be distributed publicly to all communities to use and interpret.`,
    author: `@digitaljustlab`,
    keywords: `virtual grounds, feminism, digital justice lab, trinity square video, canada council for the arts, arts sector innovation grant`,
    siteUrl: `http://virtualgrounds.zone/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Virtual Grounds Showcase`,
        short_name: `VirtualGrounds-Showcase`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#307574`,
        display: `minimal-ui`,
        icon: `src/images/femmeTechIcon.png`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svgs/ 
        }
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
