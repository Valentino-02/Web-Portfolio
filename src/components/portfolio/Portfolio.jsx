import "./portfolio.css";
import React from "react";
import Img1 from "../../assets/portfolio1.jpg";
import Img2 from "../../assets/portfolio2.jpg";
import Img3 from "../../assets/portfolio3.jpg";
import Img4 from "../../assets/portfolio4.jpg";
import Img5 from "../../assets/portfolio5.png";
import Img6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    img: Img1,
    title: "A Title",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 2,
    img: Img2,
    title: "A Title",
    github: "https://github.com",
    demo: "https://github.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, img, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item_image">
                <img src={img} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item_cta">
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
