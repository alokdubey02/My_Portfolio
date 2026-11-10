import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Where I've Worked</h5>
      <h2>Work Experience</h2>

      <div className="container experience__work-container">
        {/* e-Beta Innovations LLP (PrepLap) */}
        <article className="experience__work-card">
          <div className="experience__work-header">
            <h3>e-Beta Innovations LLP</h3>
            <h4>Software Developer, EdTech (PrepLap)</h4>
            <span className="experience__work-duration">Jan 2025 – Present | Remote, India</span>
          </div>
          <div className="experience__work-list">
            <div className="experience__work-item">
              <BsPatchCheckFill className="experience__work-item-icon" />
              <p>Sole frontend developer for 3 live production applications (Student, Admin Control Tower, and Instructor Portal), scaling the platform to <strong>2,500+ active users</strong> and 100+ scholarship recipients.</p>
            </div>
            <div className="experience__work-item">
              <BsPatchCheckFill className="experience__work-item-icon" />
              <p>Delivered student test engine with question navigation, anti-cheat security controls, auto-submit, Razorpay payments, and Refer & Earn wallet ledger.</p>
            </div>
            <div className="experience__work-item">
              <BsPatchCheckFill className="experience__work-item-icon" />
              <p>Engineered an Admin Console with a granular API-level permission manager for RBAC access control and an Instructor Portal with one-click course cloning.</p>
            </div>
          </div>
          <div className="experience__work-tech">
            <span className="experience__work-tag">React.js</span>
            <span className="experience__work-tag">Next.js</span>
            <span className="experience__work-tag">Redux</span>
            <span className="experience__work-tag">REST APIs</span>
            <span className="experience__work-tag">Tailwind CSS</span>
            <span className="experience__work-tag">Netlify</span>
          </div>
        </article>

        {/* GenieHub Pvt. Ltd. */}
        <article className="experience__work-card">
          <div className="experience__work-header">
            <h3>GenieHub Pvt. Ltd.</h3>
            <h4>Frontend Developer, On-Demand Services</h4>
            <span className="experience__work-duration">Jan 2024 – Dec 2024 | India</span>
          </div>
          <div className="experience__work-list">
            <div className="experience__work-item">
              <BsPatchCheckFill className="experience__work-item-icon" />
              <p>Built and maintained responsive, reusable React/Redux UI components from Figma designs for customer booking and service discovery modules.</p>
            </div>
            <div className="experience__work-item">
              <BsPatchCheckFill className="experience__work-item-icon" />
              <p>Implemented secure user authentication and KYC verification flows, integrating Node.js REST APIs and resolving complex state synchronization.</p>
            </div>
            <div className="experience__work-item">
              <BsPatchCheckFill className="experience__work-item-icon" />
              <p>Collaborated closely with design and backend teams to refine product specifications, debug issues, and ship releases on schedule.</p>
            </div>
          </div>
          <div className="experience__work-tech">
            <span className="experience__work-tag">React.js</span>
            <span className="experience__work-tag">Redux</span>
            <span className="experience__work-tag">Node.js</span>
            <span className="experience__work-tag">REST APIs</span>
            <span className="experience__work-tag">Figma</span>
          </div>
        </article>
      </div>

      <div className="experience__skills-heading">
        <h5>What Skills I Have</h5>
        <h2>Technical Skills</h2>
      </div>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend & UI Engineering</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>React.js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Next.js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Redux</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>TypeScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JavaScript (ES6+)</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Tailwind CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Material UI</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>React Native</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend, Databases & AI Tools</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Node.js & REST</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>PostgreSQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MySQL & SQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>C++ & Java</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JWT & RBAC</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Razorpay & APIs</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>AI Dev Tools</h4>
                <small className="text-light">Copilot & LLMs</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
