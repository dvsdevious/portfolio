import React from "react"
import SheCodes from "../SheCodes"
import Image from "../../images/aboutme.jpeg"
import AboutMeBackImage from "../../images/plantsme.jpg"
import {InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, ImgWrap, TopLine, Heading, Img, Text } from "../AboutElements"
import styled from "styled-components"
import "../CSS/About.css"

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
                        <Text><p> Front End Developer with 1+ year of experience working with JavaScript, React, HTML/CSS and Bootstrap.</p>
                            <p>Completed four coding workshops with SheCodes. See credentials below ↓</p>
                            <p>My projects:</p>
                            <ul>
                                <li>Developed two website applications utilizing APIs.</li>
                                <li>Created functional website for a small fitness brand.</li>
                            </ul>
                        </Text>
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
        <SheCodes/>
   
    </>
    )
}
