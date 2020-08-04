const path = require(`path`)

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
      allMarkdownRemark(filter: {frontmatter: { published: {eq: true} }}) {
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
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const template = node.fileAbsolutePath.indexOf('pages/blog') > -1
      ? path.resolve(`src/templates/blog.tsx`)
      : path.resolve(`src/templates/page.tsx`)

    createPage({
      path: `/${trimLeft(node.frontmatter.path, '/')}`,
      component: template,
      context: {}, // additional data can be passed via context
    })
  })
}