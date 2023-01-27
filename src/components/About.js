import React from "react"
import Image from "../images/aboutme.jpeg"
import AboutMeBackImage from "../images/plantsme.jpg"
import {InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, ImgWrap, TopLine, Heading, Img, Text } from "./AboutElements"
import styled from "styled-components"

const AboutImage = styled.img`
    top:0;  
    position: absolute;
    width: 100%;
    height: 120vh; 
    object-fit: cover;
    z-index:-1`

export default function About () {
    return (
    <>
    <InfoContainer>
        <AboutImage src={AboutMeBackImage}/>
        <InfoWrapper>
            <InfoRow>
                <Column1>
                    <TextWrapper>
                        <TopLine>dvsdev</TopLine>
                        <Heading>About Me</Heading>
                        <Text><p>Hello, my name is dasha</p></Text>
                    </TextWrapper>
                </Column1>
                <Column2>
                    <ImgWrap>
                        <Img src={Image} />
                    </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>
    </InfoContainer>
    </>
    )
}