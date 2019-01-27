import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'


import { GlobalStyle } from '../utils/globalStyle'
import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <GlobalStyle/>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Site>
          <SiteContent>
            {children}
          </SiteContent>
        </Site>
        <Footer />
      </>
    )}
  />
)

const Site = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

const SiteContent = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
