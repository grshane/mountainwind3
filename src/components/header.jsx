import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import gatsbyLogo from '../images/logo.png'

const MenuLink = styled.li`
  display: inline-block;
  margin-right: 1rem;

  a {
    color: #fff;
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
    &:hover {
      text-decoration: underline;
    }
  }
`

const Menu = styled.ul`
  list-style: none;
  margin-bottom: 0;
`

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 75em;
  padding: 0.4rem 1.0875rem 0;

  a {
    display: flex;
    align-items: center;

    h1 {
      color: #fff;
      margin-left: 0.5em;
      margin-bottom: 0.5rem;
      font-weight: normal;
      font-size: 1.5rem;
    }
  }
`

const Logo = styled.img`
  width: 55px;
  padding-top: 10px;
`

const ListLink = props => (
  <MenuLink>
    <Link to={props.to}>{props.children}</Link>
  </MenuLink>
)

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: 'black',
      position: 'sticky',
      top: 0,
    }}
  >
    <HeaderWrapper>
      <Link
        to="/"
        style={{
          color: 'white',
          textDecoration: 'none',
        }}
      >
        <Logo src={gatsbyLogo} alt={siteTitle} />
        <h1>{siteTitle}</h1>
      </Link>

      <Menu>
        <ListLink to="/services">Services</ListLink>
        {/*<ListLink to="/films/">Films</ListLink>*/}
        <ListLink to="/contact/">Contact</ListLink>
      </Menu>
    </HeaderWrapper>
  </header>
)

export default Header
