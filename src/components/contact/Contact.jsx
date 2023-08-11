import React from 'react'
import emailjs from 'emailjs-com'
import { useRef } from 'react';
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {FaLinkedinIn,FaWhatsapp} from 'react-icons/fa'

const Contact = () => {

  const form =useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_n1c15cb', 'template_y6s4pbe', form.current, 'WY41BwAoCtI4NtskW')

      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };



  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
            <article className="contact__option">
              <MdOutlineMail className='contact__option-icon'/>
              <h4>email</h4>
              <h5>alokkumardubey02@gmail.com</h5>
              <a href="mailto:alokkumardubey02@gmail.com" target="_blank" rel="noreferrer">Send a mail</a>
            </article>
            <article className="contact__option">
              <FaLinkedinIn className='contact__option-icon'/>
              <h4>linkedin</h4>
              <h5>Alok Kumar Dubey</h5>
              <a href="https://www.linkedin.com/in/alok-kumar-dubey-44346325a/" target="_blank" rel="noreferrer">Send a message</a>
            </article>
            <article className="contact__option">
              <FaWhatsapp className='contact__option-icon'/>
              <h4>Whatsapp</h4>
              <h5>827508-2348591</h5>
              <a href="https://api.whatsapp.com/send?phone=9122942694" target="_blank" rel="noreferrer">Send a message</a>
            </article>
        </div>
        {/* End of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact