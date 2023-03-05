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
            <div className='a-sub'> 
                <p>Hi there! I'm a Front End Developer with a 1+ year of experience working with with HTML, CSS, JavaScript and React. </p>
                <p>My coding journey started with SheCodes workshops where I discovered my passion for web design & development. I've built a couple of website applications using APIs and created a functional website for a small fitness brand.</p>
                <p>Completing my bachelor's degree in business, I have gained the valuable knowledge. Therefore, my goal is to create and perfect web applications that will create a seamless experience for the customers.  </p>
            </div>
        </div>
    </div>
  )
}