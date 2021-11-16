import React from "react"
import "./HeroSection.css"
import {Button} from "react-bootstrap"
import styled from "styled-components"

const HeroImage = styled.img`
    top:0;  
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index:-1`

export default function HeroSection() {
    return (
        <div className="hero-container">
            <HeroImage src="/images/heroimg.jpg" alt=""/>
            <h1> Hello I am Daria</h1>
            <h2>Front-end develper from Moscow, Russia</h2>
            <div className="hero-btns">
                <Button 
                className="btns" 
                buttonStyle="btn--outline" 
                buttonsize="btn--large">
                My Projects
                </Button>
            </div>
        </div>
    )
}