import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import Logo from '../assets/images/logo.svg'
import gsap from 'gsap-trial'

const LogoHome = () => {
  let solidLogo = useRef()

  useEffect(() => {
    gsap.fromTo(
      solidLogo.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 2,
        duration: 5,

      }
    )
  }, [])

  return (
    <LogoContainer>
      <img src={Logo} ref={solidLogo} alt="" />
    </LogoContainer>
  )
}

const LogoContainer = styled.div`
  width: 400px;
  height: 609px;
  position: absolute;
  top: 0;
  right: 15%;
  bottom: 0;
  left: auto;

  svg{
    width: 100%;
    height: auto;
    bottom: 0;
    transform: rotateZ(30deg) !important;
  }

  img{
    position: absolute;
    top: auto;
    bottom: auto;
    right: auto;
    margin: auto;
    left: -35%;
    width: 160%;
    z-index: 1;
    opacity: 0;
  }
`

export default LogoHome