import React from 'react'
import Header from "./components/header/header"
import Nav from "./components/nav/nav"
import About from "./components/about/about"
import Experinece from "./components/experience/experience"
import Services from "./components/services/services"
import Portfolio from "./components/portfolio/portfolio"
import Blog from "./components/blog/blog"
import Testimonials from "./components/testimonials/testimonials"
import Certifications from "./components/certification/certifications"
import Contact from "./components/contact/contact"
import Footer from "./components/footer/footer"



const app = () => {
  return (
   <>
    <Header/>
    <Nav/>
    <About/>
    <Testimonials/>
    <Certifications/>
    <Experinece/>
    <Services/>
    <Portfolio/>
    <Blog/>
    <Contact/>
    <Footer/>
   </>
  )
}

export default app