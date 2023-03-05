import React from 'react'
import "../components/CSS/AboutPreview.css"
import IntroGif from "../images/IntroVideo.gif"

export default function AboutPreview() {
  return (
    <div className="a">
        <div className="a-left"> 
            <div className="a-card">
                <img 
                src={IntroGif}
                alt=""
                className="a-img"/>
            </div>
        </div>
        <div className="a-right">
        <h1 className="a-title">About Me</h1>
            <p className='a-sub'>
                Front-end developer with a background in marketing and SMM. Looking to expand my portfolio.
            </p>
        </div>
    </div>
  )
}