import React from 'react'
// import PropTypes from 'prop-types'
import { StaticQuery, graphql, Link } from 'gatsby'

const FILM_ARCHIVE_QUERY = graphql`
  query getFilms {
    allMarkdownRemark(filter: { frontmatter: { template: { eq: "film" } } }) {
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

const FilmList = () => (
  <StaticQuery
    query={FILM_ARCHIVE_QUERY}
    render={({ allMarkdownRemark }) => (
      <>
        <div>
          {allMarkdownRemark.edges.map(edge => (
            <li key={edge.node.frontmatter.slug}>
              <Link to={`film/${edge.node.frontmatter.slug}`}>
                {edge.node.frontmatter.title}
              </Link>
            </li>
          ))}
        </div>
      </>
    )}
  />
)

export default FilmList
