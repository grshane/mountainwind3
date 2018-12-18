import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from './layout'

export const films = graphql`
  query getThis($slug: String) {
  markdownRemark(frontmatter: {
    slug: {
      eq: $slug
    }
  }){
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
        <div
          dangerouslySetInnerHTML={{
            __html: markdownRemark.html,
          }}
        />
      </Layout>
    )
  }
}

export default FilmLayout
