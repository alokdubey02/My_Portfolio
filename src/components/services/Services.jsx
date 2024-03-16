import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What we offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {/* ux/ui */}
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                User-centric and visually appealing designs tailored to your
                brand.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Intuitive user experience to enhance engagement and
                satisfaction.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Prototyping and wireframing for seamless navigation and
                functionality.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Responsive design for optimal performance across devices.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Continuous improvement based on user feedback and analytics.
              </p>
            </li>
          </ul>
        </article>
        {/* webDevlopment */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Customized web solutions tailored to your business requirements.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Scalable and secure web applications built with modern
                technologies.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Optimized performance for fast loading and smooth user
                experience.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Integration of third-party APIs and services for enhanced
                functionality.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Regular updates and maintenance to ensure long-term reliability.
              </p>
            </li>
          </ul>
        </article>
        {/* content creation */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Compelling and engaging content tailored to your target
                audience.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Creation of high-quality articles, blog posts, and social media
                content.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Professional copywriting and editing services for clear and
                concise communication.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Content strategy development to drive brand awareness and
                engagement.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                SEO optimization to improve visibility and ranking on search
                engines.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
