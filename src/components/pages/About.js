import React from "react"
import SheCodes from "../SheCodes"
import Image from "../../images/aboutme.jpeg"
import AboutMeBackImage from "../../images/plantsme.jpg"
import {InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, ImgWrap, TopLine, Heading, Img, Text } from "../AboutElements"
import styled from "styled-components"
import "../CSS/About.css"
import {
    StyleSheet,
    SafeAreaView,
    ScrollView,
    StatusBar,
  } from 'react-native';

const AboutImage = styled.img`
    top:0;  
    position: absolute;
    width: 100%;
    height: 110vh; 
    object-fit: cover;
    z-index:-1`

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        height: 450
    },
    scrollView: {
        marginHorizontal: 20,
    },
    text: {
        fontSize: 32,
    },
      });

export default function About () {
    return (
    <>
    <InfoContainer>
        <AboutImage src={AboutMeBackImage}/>
        <InfoWrapper>
            <InfoRow>
                <Column1>
                    <TextWrapper>
                        <TopLine></TopLine>
                        <Heading>About Me</Heading>
                        <SafeAreaView style={styles.container}>
                        <ScrollView style={styles.scrollView}>
                            <Text style={styles.text}>
                                <p>I graduated from Chaifetz School of Business (Saint Louis University) with a B.S. in International Business.</p>
                                <p>After graduation, I worked as a Marketing and PR specialist for a TV and Radio broadcasting company. However, I eventually decided to leave my job and pursue a fitness project, where I helped my friend to develop her brand. As a social media manager and website developer, I wanted to create a unique fitness brand with a user-friendly interface and a fully functional platform where anyone can complete fitness workouts and achieve their goals. </p>
                                <p>As I started using website builder platforms like Wix and Tilda, I discovered that I wanted more control over the design and functionality of my websites. To achieve this, I decided to learn how to code and embarked on a continuous learning journey.</p>
                                <p>Through my studies with SheCodes, I completed four coding workshops and gained hands-on experience developing two website applications that utilized APIs. See credentials below ↓</p>
                                <p>I have over one year of experience as a Front-End Developer, specializing in HTML, CSS, JavaScript, and React. Throughout this time, I have honed my skills in creating engaging user interfaces, developing responsive designs, and building dynamic web applications.</p>
                            </Text>
                        </ScrollView>
                    </SafeAreaView>
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
