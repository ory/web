const path = require(`path`)
const fetch = require('node-fetch')
const webpack = require('webpack')

const trimLeft = (s, charlist) => {
  if (charlist === undefined) {
    charlist = '\s'
  }

  return s.replace(new RegExp('^[' + charlist + ']+'), '')
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allMdx(filter: { frontmatter: { published: { ne: false } } }) {
        edges {
          node {
            fileAbsolutePath
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query: ${result.errors}`)
    return
  }

  result.data.allMdx.edges.forEach(({ node }) => {
    let template = path.resolve(`src/templates/page.tsx`)
    if (node.fileAbsolutePath.indexOf('markdown/blog') > -1) {
      template = path.resolve(`src/templates/blog.tsx`)
    } else if (node.fileAbsolutePath.indexOf('markdown/pages') > -1) {
      template = path.resolve(`src/templates/page.tsx`)
    } else if (node.fileAbsolutePath.indexOf('markdown/jobs') > -1) {
      template = path.resolve(`src/templates/jobs.tsx`)
    }

    createPage({
      path: `/${trimLeft(node.frontmatter.path, '/')}`,
      component: template,
      context: {} // additional data can be passed via context
    })
  })
}

const remoteFileType = 'RemoteFile'

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type ${remoteFileType} implements Node {
      content: String
      url: String
    }
  `
  createTypes(typeDefs)
}

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest
}) => {
  const { createNode } = actions

  const urls = [
    'https://raw.githubusercontent.com/ory/kratos-selfservice-ui-react-native/master/app.config.js',
    'https://github.com/ory/kratos-selfservice-ui-react-native/blob/master/App.tsx',
    'https://github.com/ory/kratos-selfservice-ui-react-native/blob/master/src/components/AuthProvider.tsx',
    'https://github.com/ory/kratos-selfservice-ui-react-native/blob/master/src/helpers/auth.tsx',
    'https://github.com/ory/kratos-selfservice-ui-react-native/blob/master/src/components/Navigation.tsx',
    'https://github.com/ory/kratos-selfservice-ui-react-native/blob/master/src/components/Routes/Login.tsx',
    'https://github.com/ory/kratos-selfservice-ui-react-native/blob/master/src/components/Routes/Registration.tsx',
    'https://github.com/ory/kratos-selfservice-ui-react-native/blob/master/src/components/Routes/Home.tsx',
    'https://github.com/ory/kratos-selfservice-ui-react-native/blob/master/src/components/Routes/Settings.tsx',
    'https://github.com/ory/kratos-selfservice-ui-react-native/blob/master/app.config.js',
    'https://github.com/ory/kratos-selfservice-ui-react-native/blob/master/src/helpers/sdk.tsx'
  ]

  await Promise.all(
    urls.map((url) =>
      fetch(
        url
          .replace('github.com', 'raw.githubusercontent.com')
          .replace('/blob/', '/')
      )
    )
  )
    .then((res) => Promise.all(res.map((r) => r.text())))
    .then((res) =>
      Promise.all(
        res.map((file, key) => {
          const url = urls[key]
          return createNode({
            id: createNodeId(`${remoteFileType}-${url}`),
            parent: null,
            children: [],
            content: file,
            url: url,
            internal: {
              type: remoteFileType,
              mediaType: `text/text`,
              contentDigest: createContentDigest(file)
            }
          })
        })
      )
    )
    .catch((err) => {
      console.error(err)
      return Promise.resolve()
    })
}

exports.onCreateWebpackConfig = ({
  stage,
  actions,
  getConfig,
  loaders,
  plugins
}) => {
  /* https://github.com/gatsbyjs/gatsby/discussions/30169#discussioncomment-877458 */
  // See also https://github.com/mediacurrent/gatsby-plugin-silence-css-order-warning/issues/1
  const config = getConfig()
  const miniCssExtractPluginIndex = config.plugins.findIndex(
    (plugin) => plugin.constructor.name === 'MiniCssExtractPlugin'
  )

  if (miniCssExtractPluginIndex > -1) {
    // remove miniCssExtractPlugin from plugins list
    config.plugins.splice(miniCssExtractPluginIndex, 1)

    // re-add mini-css-extract-plugin
    if (stage === 'build-javascript') {
      config.plugins.push(
        plugins.extractText({
          filename: `[name].[contenthash].css`,
          chunkFilename: `[name].[contenthash].css`,
          ignoreOrder: true
        })
      )
    } else {
      config.plugins.push(
        plugins.extractText({
          filename: `[name].css`,
          chunkFilename: `[id].css`,
          ignoreOrder: true
        })
      )
    }
  }
  actions.replaceWebpackConfig(config)
  /* end */

  actions.setWebpackConfig({
    resolve: {
      fallback: {
        stream: require.resolve('stream-browserify'),
        events: require.resolve('events'),
        buffer: require.resolve('buffer/')
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        process: 'process/browser',
        Buffer: ['buffer', 'Buffer']
      })
    ]
  })
}
