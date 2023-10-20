/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {ImBlogger2} from 'react-icons/im'
import {FaGraduationCap} from 'react-icons/fa'
import {GiSkills} from 'react-icons/gi'
import { useState } from 'react'

const nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <div>
      <nav>
        <a href="#" onClick={() => {setActiveNav('#')}} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
        <a href="#about" onClick={() => {setActiveNav('#about')}} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
        <a href="#testimonials" onClick={() => {setActiveNav('#testimonials')}} className={activeNav === '#testimonials' ? 'active' : ''}><FaGraduationCap/></a>
        <a href="#experience" onClick={() => {setActiveNav('#experience')}} className={activeNav === '#experience' ? 'active' : ''}><GiSkills/></a>
        <a href="#services" onClick={() => {setActiveNav('#services')}} className={activeNav === '#services' ? 'active' : ''}><BiBook/></a>
        {/* <a href="#portfolio" onClick={() => {setActiveNav('#portfolio')}} className={activeNav === '#portfolio' ? 'active' : ''}><RiServiceLine/></a> */}
        {/* <a href="#blogs" onClick={() => {setActiveNav('#blogs')}} className={activeNav === '#blogs' ? 'active' : ''}><ImBlogger2/></a>
        <a href="#contact" onClick={() => {setActiveNav('#contact')}} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a> */}
      </nav>
    </div>
  )
}

export default nav