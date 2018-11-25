import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import HeroVideo from '../components/hero'

const IndexPage = () => (
  <Layout>
    <HeroVideo />
    <h2>About Mountain Wind Productions</h2>
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
