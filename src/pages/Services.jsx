import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>About Mountain Wind Productions</h1>
    <p>
      Mountain Wind is a full-service production company specialized in content
      development, film production, and entertainment risk control. With a
      diverse, highly talented, and experienced team, we want to help you bring
      your stories to life in a cinematic, compelling, and safe way.
    </p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
