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
                <p>Hi there! My name is Daria and I'm a web developer with over a year of experience in HTML, CSS, JavaScript and React. </p>
                <p>In addition to my technical skills, I hold a Bachelor's degree in Business and have worked in marketing and social media management. </p>
                <p>I'm passionate about creating beautiful and functional websites that help businesses achieve their goals. Let's work together to bring your vision to life!"</p>
            </div>
        </div>
    </div>
  )
}