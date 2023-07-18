import React from "react"
import styled from "styled-components"
import "./CSS/HeroSection.css"

const HeroImage = styled.img`
    top:0;  
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index:-1`


export default function Intro() {
    return (
    <div className="hero-container">
            <HeroImage src="/images/heroimg.jpg" alt=""/>
            <h1> Hello I am Daria</h1>
            <h2>Junior Front-end develper based in Tokyo, Japan</h2>
            <div class="arrow">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}
