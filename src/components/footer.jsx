import React from 'react'
import styled from 'styled-components'

const FooterStyled = styled.footer`
  background: royalblue;
  padding: 2em 0;
  margin: auto;
`
const Wrapper = styled.div`
  display: flex;
  max-width: 75em;
  justify-content: space-between;
  margin: auto;
`

const FooterItem = styled.div`
  text-align: center;
  min-width: 200px;
`

const Footer = () => {
  return (
    <FooterStyled>
      <Wrapper>
        <FooterItem />
        <FooterItem>
          <p>All Rights Reserved Mountain Wind Productions</p>
        </FooterItem>
        <FooterItem />
      </Wrapper>
    </FooterStyled>
  )
}

export default Footer
