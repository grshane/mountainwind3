import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import ServiceList from '../components/serviceList'

const IndexPage = () => (
  <Layout>
    <h1>Services</h1>
    <p>
      We provide complete production services with top-of-the-line equipment
      catered personally to your needs. Depending upon your needs, we offer full
      services from development through post-production or specific services to
      complete your team.
    </p>
    <ServiceList />
  </Layout>
)

export default IndexPage
