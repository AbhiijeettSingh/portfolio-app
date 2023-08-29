import React from 'react';
import "./Header.css";
import CTA from './CTA';

const Header = () => {
  return (
      <div className='container header_container'>
        <h3>Hello I'm</h3>
        <h1>Abhijeet Singh</h1>
        <h4 className='text-light'>Full Stack Developer</h4>
        <CTA />
      </div>
  )
}

export default Header;