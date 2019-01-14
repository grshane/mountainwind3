const path = require('path')

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    if (node.frontmatter.template) {
      createNodeField({
        node,
        name: `slug`,
        value: `${node.frontmatter.template}${slug}`,
      })
    } else {
      createNodeField({
        node,
        name: `slug`,
        value: slug,
      })
    }
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise(resolve => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                slug
                template
              }
            }
          }
        }
      }
    `).then(results => {
      results.data.allMarkdownRemark.edges.forEach(({ node }) => {
        if (node.frontmatter.template === 'film') {
          createPage({
            path: `/film/${node.frontmatter.slug}`,
            component: path.resolve('./src/components/layout.jsx'),
            context: {
              slug: `/project/${node.frontmatter.slug}`,
              template: node.frontmatter.template,
            },
          })
        } else if (node.frontmatter.template === 'service') {
          createPage({
            path: `/service/${node.frontmatter.slug}`,
            component: path.resolve('./src/components/layout.jsx'),
            context: {
              slug: `/service/${node.frontmatter.slug}`,
              template: node.frontmatter.template,
            },
          })
        } else {
          createPage({
            path: node.frontmatter.slug,
            component: path.resolve('./src/components/postLayout.jsx'),
            context: {
              slug: node.frontmatter.slug,
              template: node.frontmatter.template,
            },
          })
        }
      })
      resolve()
    })
  })
}
