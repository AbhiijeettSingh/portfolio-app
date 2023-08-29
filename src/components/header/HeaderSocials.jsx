import React from 'react'
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';


const HeaderSocials = () => {
  return (
    // eslint-disable-next-line
    <div className='header_socials'>
      <a href="mailto:abhiijeettsingh@gmail.com" className='socialIcons'><FiMail /></a>
      <a href='https://www.linkedin.com/in/abhiijeettsingh/' className='socialIcons'><BsLinkedin /></a>
      <a href='https://github.com/AbhiijeettSingh' className='socialIcons'><FaGithub /></a>
      <a href='https://twitter.com/AbhiijeetSingh' className='socialIcons'><FaTwitter /></a>
    </div>
  )
}

export default HeaderSocials