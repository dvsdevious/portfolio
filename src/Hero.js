import React from 'react'
import "./Hero.css"
import styled from 'styled-components'

const Hero = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`;
const HeroImage = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;


export default function HeroSection() {
    return(
    <>
      <Hero>
        <HeroImage src="/images/heroimg.jpg" alt="background" />
      </Hero>
    </>
    )
}
