import React from "react";
import "./about.css";
import ME from "../../assets/mee-about.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
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
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>.6+ year Experience</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>0 WorldWide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Project</h5>
              <small>8+ completed</small>
            </article>
          </div>
          <p>
            My name is Alok Kumar Dubey, and I cracked MAHCET with a score of
            99.76 percentile, earning my Master's degree in Computer
            Applications (MCA) from SPIT. Doing intern and have over 0.6 years
            of experience(intern) in web development and have successfully
            completed more than 8 projects (Company+college+individual). Let's
            discuss how I can help you achieve your goals.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
