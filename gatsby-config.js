module.exports = {
  siteMetadata: {
    title: `ory.sh`,
    description: `Implement OAuth 2.0 and OpenID Connect in minutes with open source from ORY. Works in both new and existing systems.`,
    author: `ORY Corp.`,
    siteUrl: `https://www.ory.sh`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/pages/markdown`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/pages/blog`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /.*images\/animations\/.*\.svg$/ // See below to configure properly
        }
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 860,
              tracedSVG: true,
            },
          },
          {
            resolve: 'gatsby-remark-video',
          },
          {
            resolve: 'gatsby-remark-embed-video',
            options: {
              width: 800,
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              height: 400, // Optional: Overrides optional.ratio
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
            },
          },
          {
            resolve: 'gatsby-remark-emojis',
            options: {
              active: true,
              class: 'remark-emoji',
              size: 64,
            },
          },
          // prismjs to be loaded last or it will interfere with remark-embed-video
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (eg <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (eg for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: 'language-',
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require('postcss-for'),
          require('postcss-color-mod-function')(),
          require('lost'),
          require(`postcss-preset-env`)({
            stage: 0,
            features: {
              'custom-media-queries': {
                importFrom: [
                  {
                    customMedia: {
                      '--sm-viewport': '(max-width: 375px)',
                      '--md-viewport': '(max-width: 768px) and (min-width: 375px)',
                      '--lg-viewport': '(min-width: 769px)',
                      '--mobile-viewport': '(max-width: 768px)',
                    },
                  },
                ],
              },
            },
          }),
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
      },
    },
    // `gatsby-transformer-sharp`,
    // `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    // name: `gatsby-starter-default`,
    // short_name: `starter`,
    // start_url: `/`,
    // background_color: `#663399`,
    // theme_color: `#663399`,
    // display: `minimal-ui`,
    // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    // },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: 'src/images/icon/favicon-196x196.png',
        name: `ORY Website and Documentation`,
        short_name: `ORY`,
        start_url: `/`,
        background_color: `#15283B`,
        theme_color: `#6274F3`,
        display: `browser`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
          importWorkboxFrom: `cdn`,
          runtimeCaching: [
            {
              // Do not cache ads
              urlPattern: /^https?:\/\/codefund\.io/,
              handler: `NetworkOnly`,
            },
            {
              // Cache docs css etc
              urlPattern: /^.+\/docs\/.+\.(css|js|png|svg|jpg)/,
              handler: `StaleWhileRevalidate`,
            },
            {
              // Cache docs pages
              urlPattern: /^.+\/docs\/([a-zA-Z0-9\-_\/]+)(\/||\.html|\.htm)/,
              handler: `NetworkFirst`,
            },
          ]
        },
      },
    },
    `gatsby-plugin-force-trailing-slashes`,
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'UA-71865250-1',
          cookieName: 'gdpr_cookie_analytics',
          anonymize: true,
          allowAdFeatures: false
        },
        googleTagManager: {
          trackingId: 'GTM-MJD22FZ',
          cookieName: 'gdpr_cookie_analytics'
        },

        // facebookPixel: {
        //   pixelId: 'YOUR_FACEBOOK_PIXEL_ID', // leave empty if you want to disable the tracker
        //   cookieName: 'gatsby-gdpr-facebook-pixel', // default
        // },
        // defines the environments where the tracking should be available  - default is ["production"]

        environments: ['production', 'development']
      },
    },
  ],
}
