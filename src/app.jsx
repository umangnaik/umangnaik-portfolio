import React from 'react'
import Header from "./components/header/header"
import Nav from "./components/nav/nav"
import About from "./components/about/about"
import Experinece from "./components/experience/experience"
import Services from "./components/services/services"
import Portfolio from "./components/portfolio/portfolio"

import Testimonials from "./components/testimonials/testimonials"


import Contact from "./components/contact/contact"
import Footer from "./components/footer/footer"



const app = () => {
  return (
   <>
    <Header/>
    <Nav/>
    <About/>
    <Experinece/>
    <Services/>
    <Portfolio/>
    <Testimonials/>
    <Contact/>
    <Footer/>
   </>
  )
}

export default app