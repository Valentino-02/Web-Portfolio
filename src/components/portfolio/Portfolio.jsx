import "./portfolio.css";
import { React, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Aos from "aos";
import "aos/dist/aos.css";
import Img1 from "../../assets/cat.jpg";

const data = [
  {
    id: 1,
    img: Img1,
    title: "A Title",
    description:
      "A description about this Project and what it does. Maybe. A description about this Project and what it does. Maybe",
    github: "https://github.com",
    demo: "https://github.com",
    animation: "fade-right",
  },
  {
    id: 2,
    img: Img1,
    title: "A Title",
    description:
      "A description about this Project and what it does. Maybe. A description about this Project and what it does. Maybe",
    github: "https://github.com",
    demo: "https://github.com",
    animation: "fade-left",
  },
  {
    id: 3,
    img: Img1,
    title: "A Title",
    description:
      "A description about this Project and what it does. Maybe. A description about this Project and what it does. Maybe",
    github: "https://github.com",
    demo: "https://github.com",
    animation: "fade-right",
  },
  {
    id: 4,
    img: Img1,
    title: "A Title",
    description:
      "A description about this Project and what it does. Maybe. A description about this Project and what it does. Maybe",
    github: "https://github.com",
    demo: "https://github.com",
    animation: "fade-left",
  },
];

const Portfolio = () => {
  const { t } = useTranslation();

  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);
  return (
    <section id="portfolio">
      <h2>My Projects</h2>

      <div className="container portfolio_container">
        {data.map(
          ({ id, img, title, description, github, demo, animation }) => {
            return (
              <div data-aos={animation}>
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
                        Demo
                      </a>
                    </div>
                  </div>

                  <h5>{description}</h5>
                </article>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Portfolio;
