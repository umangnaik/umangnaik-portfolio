import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {FaTwitterSquare} from 'react-icons/fa'
import {FaDev} from 'react-icons/fa'

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>UMANG</a>
      <ul className='permalinks'>
        <li>
        <a href="#">Home</a>
        </li>
        <li>
        <a href="#about">About</a>
        </li>
        <li>
        <a href="#testimonials">Education</a>
        </li>
        <li>
        <a href="#certifications">Certification</a>
        </li>
        <li>
        <a href="#experience">Skills</a>
        </li>
        <li>
        <a href="#services">Experience</a>
        </li>
        <li>
        <a href="#services">Services</a>
        </li>
        <li>
        <a href="#portfolio">Project</a>
        </li>
        <li>
        <a href="#blogs">Blog</a>
        </li>
        <li>
        <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className='footer__socials'>
        <a href="https://www.linkedin.com/in/%E3%83%8A%E3%82%A4%E3%82%AF-naik-%E3%82%A6%E3%83%9E%E3%83%B3%E3%82%B0-umang-0aa721b8/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/umangnaik" target="_blank"><BsGithub/></a>
        <a href="https://dev.to/umangnaik" target="_blank"><FaDev/></a>
        <a href="https://twitter.com/udnaik14" target="_blank"><IoLogoTwitter/></a>
        <a href="https://dribbble.com" target="_blank"><BsInstagram/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; UMANG Personal. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default footer