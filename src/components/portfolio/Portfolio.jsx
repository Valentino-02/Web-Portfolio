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
    description:
      "A description about this Project and what it does. Maybe. A description about this Project and what it does. Maybe",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 2,
    img: Img2,
    title: "A Title",
    description:
      "A description about this Project and what it does. Maybe. A description about this Project and what it does. Maybe",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 3,
    img: Img2,
    title: "A Title",
    description:
      "A description about this Project and what it does. Maybe. A description about this Project and what it does. Maybe",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 4,
    img: Img2,
    title: "A Title",
    description:
      "A description about this Project and what it does. Maybe. A description about this Project and what it does. Maybe",
    github: "https://github.com",
    demo: "https://github.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>My Projects</h2>

      <div className="container portfolio_container">
        {data.map(({ id, img, title, description, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <h3>{title}</h3>
              <div className="portfolio_item_container">
                <div className="portfolio_item_image">
                  <img src={img} alt={title} />
                </div>
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
              </div>
              <h5>{description}</h5>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
