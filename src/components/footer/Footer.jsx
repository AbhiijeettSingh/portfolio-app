import React from 'react'
import './Footer.css'
import {
    AiFillLinkedin,
    AiFillGithub,
} from "react-icons/ai";
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const Footer = () => {
    return (
        <div>
            <footer>
                <ul className='permalinks'>
                    <li><a href='/#'>Home</a></li>
                    <li><a href='/#about'>About</a></li>
                    <li><a href='/#portfolio'>Projects</a></li>
                    <li><a href='/#contact'>Contact</a></li>
                </ul>
                <a href="mailto:abhiijeettsingh@gmail.com" className='footer_logo'>abhiijeettsingh@gmail.com</a>
                <div className='footer_socials'>
                    <a href="https://www.linkedin.com/in/abhiijeettsingh/">
                        <AiFillLinkedin />
                    </a>
                    <a href="https://github.com/AbhiijeettSingh">
                        <AiFillGithub />
                    </a>
                    <a href="https://twitter.com/AbhiijeetSingh">
                        <FaTwitter />
                    </a>
                </div>
            </footer>

        </div>
    )
}

export default Footer;