import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import FilmList from '../components/filmList'

const IndexPage = () => (
  <Layout>
    <FilmList />
  </Layout>
)

export default IndexPage
