import React from "react"
import Intro from "./Intro"
import AboutPreview from "./AboutPreview"
import PortfolioPreview from "./PortfolioPreview"
import ContactPreview from "./ContactPreview"

export default function HeroSection() {
    return (
        <>
        <Intro/>
        <AboutPreview/>
        <PortfolioPreview/>
        <ContactPreview/>
        </>
    )
}