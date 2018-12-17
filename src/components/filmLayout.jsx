import React, { Component } from 'react'
import Layout from './layout'
import { graphql } from 'gatsby'

export const query = graphql`
  query getFilm($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        slug
        title
      }
      html
    }
  }
`
class FilmLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data
    return (
      <Layout>
        <h1>{markdownRemark.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
      </Layout>
    )
  }
}

export default FilmLayout
