import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/pizza_app.jpg";
import IMG2 from "../../assets/instagram_app.jpg";
import IMG3 from "../../assets/imdb_app.jpg";
import IMG4 from "../../assets/voyager_app.jpg";
import IMG5 from "../../assets/spit_faculty_app.jpg";

const data = [
  {
    id: 1,
    title: "PrepLap — Student Platform",
    demo: "https://preplap.in/",
  },
  {
    id: 2,
    title: "PrepLap — Control Tower Admin",
    demo: "https://controltower.preplap.in/auth/login",
  },
  {
    id: 3,
    title: "PrepLap — Instructor Portal",
    demo: "https://instructors.preplap.in/auth/login",
  },
  {
    id: 4,
    image: IMG5,
    title: "SPIT Faculty Appraisal Portal",
    github: "https://github.com/alokdubey02/spit_client.git",
    demo: "https://github.com/alokdubey02/spit_client.git",
  },
  {
    id: 5,
    title: "Airline Management System",
    github: "https://github.com/alokdubey02",
  },
  {
    id: 6,
    image: IMG4,
    title: "VoyagerVault",
    github: "https://github.com/alokdubey02/VoyagerVault.git",
    demo: "https://voyager-vault.vercel.app/",
  },
  {
    id: 7,
    image: IMG1,
    title: "Pizza website",
    github: "https://github.com/alokdubey02/Pizza_website.git",
    demo: "https://pizza-by-dubey-g.vercel.app/",
  },
  {
    id: 8,
    image: IMG2,
    title: "Instagram clone",
    github: "https://github.com/alokdubey02/instagram.git",
    demo: "https://instagram-v1-eta.vercel.app/",
  },
  {
    id: 9,
    image: IMG3,
    title: "Imdb clone",
    github: "https://github.com/alokdubey02/imdb.git",
    demo: "https://imdb-alokdubey.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                {image ? (
                  <img src={image} alt={title} />
                ) : (
                  <div className="portfolio__item-placeholder">
                    <h3>{title}</h3>
                  </div>
                )}
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                {github && (
                  <a
                    href={github}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                )}
                {demo && (
                  <a
                    href={demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
