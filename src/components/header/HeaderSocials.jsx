import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'

function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/alok-kumar-dubey-44346325a" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/alokdubey02" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://instagram.com/alok_____dubey" target="_blank" rel="noreferrer"><FaInstagram/></a>
    </div>
  )
}

export default HeaderSocials