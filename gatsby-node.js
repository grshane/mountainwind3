const path = require('path')

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    console.log(slug)
    if (node.frontmatter.template) {
      createNodeField({
        node,
        name: `slug`,
        value: slug,
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
            component: path.resolve('./src/templates/filmLayout.jsx'),
            context: {
              slug: node.frontmatter.slug,
              template: node.frontmatter.template,
            },
          })
        } else if (node.frontmatter.template === 'service') {
          createPage({
            path: `/service/${node.frontmatter.slug}`,
            component: path.resolve('./src/templates/serviceLayout.jsx'),
            context: {
              slug: node.frontmatter.slug,
              template: node.frontmatter.template,
              title: node.frontmatter.title,
              html: node.html,
            },
          })
        } else {
          createPage({
            path: `/${node.frontmatter.slug}`,
            component: path.resolve('./src/templates/postLayout.jsx'),
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
