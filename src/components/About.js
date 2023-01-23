import React from "react"
import Image from "../images/aboutme.jpeg"
import {InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, ImgWrap, TopLine, Heading, Img, Text } from "./AboutElements"
import styled from "styled-components"

const AboutImage = styled.img`
    top:0;  
    position: absolute;
    width: 100%;
    height: 100vh; 
    object-fit: cover;
    z-index:-1`

export default function About () {
    return (
    <>
    <InfoContainer>
        <AboutImage src="/images/plantsme.jpg" alt=""/>
        <InfoWrapper>
            <InfoRow>
                <Column1>
                    <TextWrapper>
                        <TopLine>dvsdev</TopLine>
                        <Heading>About Me</Heading>
                        <Text><p>Hello, my name is dasha, ksfwhefiuwhefiuwebfckjsdnbckjhw qefoihwedfcskdnck   sf;dhfowiqhefsdhfci</p></Text>
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