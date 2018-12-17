import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from './layout'

export const query = graphql`
  query getService($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        slug
        title
      }
      html
    }
  }
`

class ServiceLayout extends Component {
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

export default ServiceLayout
