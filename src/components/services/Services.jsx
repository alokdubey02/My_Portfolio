import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {/* Frontend Architecture & UI */}
        <article className="service">
          <div className="service__head">
            <h3>Frontend Architecture & UI</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Translating Figma designs into responsive, pixel-perfect React.js and Next.js interfaces.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Robust state management architectures using Redux Toolkit and modern React Hooks.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Responsive, accessible component design optimized across mobile, tablet, and desktop.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Frontend performance optimization including code-splitting and asset minimization.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Modern CSS styling with Tailwind CSS, Material UI, and scoped responsive stylesheets.
              </p>
            </li>
          </ul>
        </article>

        {/* Fullstack Web Engineering */}
        <article className="service">
          <div className="service__head">
            <h3>Fullstack Web Engineering</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                End-to-end product engineering from database schemas to client-side delivery.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Scalable and secure RESTful API development with Node.js, Express, and FastAPI.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Relational and NoSQL database modeling with PostgreSQL, MongoDB, and MySQL.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Complex workflow engines (exam testing platforms, course authoring, and referral ledgers).
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Clean, maintainable codebases adhering to modular and DRY software design patterns.
              </p>
            </li>
          </ul>
        </article>

        {/* API, Security & Payments */}
        <article className="service">
          <div className="service__head">
            <h3>API, Security & Payments</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Razorpay payment gateway integration with webhooks, coupon engines, and invoices.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Secure authentication with JWT, session management, and automated token expiry handling.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Granular Role-Based Access Control (RBAC) governing per-user endpoint permissions.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Cloud deployments, custom DNS configuration, and build troubleshooting on Netlify and Vercel.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                AI-assisted development accelerating feature prototyping, testing, and debugging.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
