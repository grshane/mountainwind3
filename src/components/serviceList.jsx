import React from 'react'
// import PropTypes from 'prop-types'
import { StaticQuery, graphql, Link } from 'gatsby'

const POST_ARCHIVE_QUERY = graphql`
  query getServices {
    allMarkdownRemark(
      filter: { frontmatter: { template: { eq: "service" } } }
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
            template
          }
          html
        }
      }
    }
  }
`

const ServiceList = () => (
  <StaticQuery
    query={POST_ARCHIVE_QUERY}
    render={({ allMarkdownRemark }) => (
      <>
        <div>
          {allMarkdownRemark.edges.map(edge => (
            <li key={edge.node.frontmatter.slug}>
              <Link to={edge.node.frontmatter.slug}>
                {edge.node.frontmatter.title}
              </Link>
            </li>
          ))}
        </div>
      </>
    )}
  />
)

export default ServiceList
