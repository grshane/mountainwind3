import React from 'react'
import styled from 'styled-components'
import VimeoPlayer from '@u-wave/react-vimeo'

const heroVideo = () => {
  return (
    <HeroVideo>
      <HeroContainer>
        <Vimeo
          video="https://player.vimeo.com/video/264662823"
          background="true"
          loop="true"
        />
      </HeroContainer>
    </HeroVideo>
  )
}

const Vimeo = styled(VimeoPlayer)`
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 0;
  height: 0;
  overflow: hidden;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`
const HeroVideo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  margin-bottom: 3em;
`

const HeroContainer = styled.div`
  position: relative;
  top: 50vh;
  left: 50vw;
  width: 100vw;
  height: auto;
  z-index: -100;
  transform: translateX(-50vw) translateY(-50vh);
  background-size: cover;
  transition: 1s opacity;
  -ms-flex-direction: column;
  flex-direction: column;
  margin-top: -20px;
`
export default heroVideo
