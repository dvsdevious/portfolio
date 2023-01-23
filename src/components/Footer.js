import React from 'react'
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';
import './CSS/Footer.css'
const Footer = () => {
  return (
    <footer>
        <a href ="#" className ='footer__logo'>dvsdev.</a>
        <ul className='permalinks'>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="footer__socials">
            <a href="https://www.linkedin.com/in/daria-sheremeteva-08430a112/"><FaLinkedin size={50}/></a>
            <a href="https://github.com/dvsdevious"><FaGithub size={50}/></a>
            <a href="#"><FaTelegram size={50}/></a>
        </div>
        <div className='footer__copyright'>
            <small>&copy; dvsdev. All rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer