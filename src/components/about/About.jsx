import React from "react";
import "./about.css";
import ME from "../../assets/mee-about.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { BsPatchCheckFill } from "react-icons/bs";

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
              <small>Nearly 3 Years</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Users Scaled</h5>
              <small>2,500+ Active Users</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>3 Live Apps + 6 Web Apps</small>
            </article>
          </div>
          <p>
            I'm Alok Kumar Dubey, a Software Developer with nearly 3 years of experience
            taking features from ideation to production. As the sole frontend developer across
            three production EdTech applications (PrepLap) and on-demand platforms (GenieHub),
            I build responsive, high-performance web applications serving 2,500+ active users.
            I hold a Master's in Computer Applications (MCA) from SPIT, Mumbai University (8.7/10 CGPA)
            and secured a 99.76 percentile in Maharashtra MCA CET (AIR 58).
          </p>

          <div className="about__education">
            <h4>Education & Key Credentials</h4>
            <div className="about__education-items">
              <div className="about__edu-item">
                <BsPatchCheckFill className="about__edu-icon" />
                <div>
                  <h5>MCA — Sardar Patel Institute of Technology (SPIT), Mumbai (2022 – 2024)</h5>
                  <small>CGPA: 8.7/10 &nbsp;|&nbsp; Maharashtra MCA CET: 99.76 Percentile (AIR 58)</small>
                </div>
              </div>
              <div className="about__edu-item">
                <BsPatchCheckFill className="about__edu-icon" />
                <div>
                  <h5>BCA — B.N. College, Patna University (2017 – 2020)</h5>
                  <small>Graduated with 76.75%</small>
                </div>
              </div>
              <div className="about__edu-item">
                <BsPatchCheckFill className="about__edu-icon" />
                <div>
                  <h5>HackerRank Certifications & Honors</h5>
                  <small>5-Star Rating in C++ &nbsp;|&nbsp; Certified in Java (Basic)</small>
                </div>
              </div>
            </div>
          </div>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
