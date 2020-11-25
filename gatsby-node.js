const path = require(`path`)
const fetch = require('node-fetch')

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
      allMdx(filter: {frontmatter: { published: {ne: false} }}) {
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

  result.data.allMdx.edges
    .forEach(({ node }) => {
      const template = node.fileAbsolutePath.indexOf('pages/blog') > -1
        ? path.resolve(`src/templates/blog.tsx`)
        : path.resolve(`src/templates/page.tsx`)

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


exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
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

  await Promise.all(urls.map((url) => fetch(
    url.replace('github.com', 'raw.githubusercontent.com')
      .replace('/blob/', '/'))))
    .then(res => Promise.all(res.map(r => r.text())))
    .then(res => Promise.all(res.map((file, key) => {
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
    })))
    .catch(err => {
      console.error(err)
      return Promise.resolve()
    })
}
