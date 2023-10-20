import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {FaTwitterSquare} from 'react-icons/fa'
import {FaDev} from 'react-icons/fa'
function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/%E3%83%8A%E3%82%A4%E3%82%AF-naik-%E3%82%A6%E3%83%9E%E3%83%B3%E3%82%B0-umang-0aa721b8/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/umangnaik" target="_blank"><BsGithub/></a>
        <a href="https://dev.to/umangnaik" target="_blank"><FaDev/></a>
        <a href="https://twitter.com/udnaik14" target="_blank"><FaTwitterSquare/></a>
        <a href="https://dribbble.com" target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials