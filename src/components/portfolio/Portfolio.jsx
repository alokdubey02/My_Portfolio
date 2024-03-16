import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "My portfolio website",
    github: "https://github.com/alokdubey02/My_Portfolio",
    demo: "https://portfolio-alok-mauve.vercel.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Instagram clone",
    github: "https://github.com/alokdubey02/instagram.git",
    demo: "https://instagram-v1-eta.vercel.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Imdb clone",
    github: "https://github.com/alokdubey02/imdb.git",
    demo: "https://imdb-alokdubey.vercel.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "VoyagerVault",
    github: "https://github.com/alokdubey02/VoyagerVault.git",
    demo: "https://voyager-vault.vercel.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "SPIT Faculty Appraisal Portal",
    github: "https://github.com/alokdubey02/spit_client.git",
    demo: "https://github.com/alokdubey02/spit_client.git",
  },
  {
    id: 6,
    image: IMG6,
    title: "Ongoing project (Social media app)",
    github: "https://github.com/alokdubey02/MERN.git",
    demo: "https://github.com/alokdubey02/MERN.git",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
