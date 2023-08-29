import React from 'react'
import Header from './components/header/Header'
import Nav from './components/Nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Contact from "./components/contact/Contact";
import Footer from './components/footer/Footer';
import Work from './components/work_experience/Work';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Work />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App;