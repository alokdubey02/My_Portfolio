import React from 'react'
import './about.css'
import ME from '../../assets/mee-about.png'
import {FaAward}  from 'react-icons/fa'
import {FiUsers}  from 'react-icons/fi'
import {VscFolderLibrary}  from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About_img" />
          </div>
        </div>
        <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>0 year Experience</small>
              </article>
              
              <article className='about__card'>
                <FiUsers className='about__icon'/>
                <h5>Clients</h5>
                <small>0 WorldWide</small>
              </article>
              
              <article className='about__card'>
                <VscFolderLibrary className='about__icon'/>
                <h5>Project</h5>
                <small>4+ completed</small>
              </article>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, doloremque fugit nisi minus et distinctio molestias temporibus architecto inventore quis quas rerum provident voluptas ut commodi voluptatibus. Atque, tenetur nisi?
            </p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About