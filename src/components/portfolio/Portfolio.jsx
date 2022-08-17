import "./portfolio.css";
import { React, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Aos from "aos";
import "aos/dist/aos.css";
import Img1 from "../../assets/project1.png";
import Img2 from "../../assets/project2.png";

import Img4 from "../../assets/project4.png";

const data = [
  {
    id: 1,
    img: Img1,
    title: "Crypto Updates",
    description:
      "made mainly with react, redux and antdesign. It consumes Apis provided by rapidapi.com. Shows info, news and data of all CryptoCoins",
    github: "https://github.com/Valentino-02/CryptoUpdates",
    demo: "https://62e13f70d5afc520c6139f7c--glittering-jalebi-df258d.netlify.app",
    animation: "fade-right",
  },
  {
    id: 2,
    img: Img2,
    title: "Photons Journey",
    description:
      "Game made with the open source engine Godot. Programmed in GdScript. It won the third place in the GoGodot 2 Jam",
    github: "https://github.com/best-godot-team-ever/GoGodotJam",
    demo: "https://tinygodzilla.itch.io/photons-journey",
    animation: "fade-left",
  },
  /*
  {
    id: 3,
    img: Img3,
    title: "Star Wars Fullstack",
    description:
      "A simple Star Wars character searcher. Made to learn the basics of a fullstack mern application. It has its own Api which consumes Swapi, a star wars non oficcial api. ",
    github: "https://github.com/Valentino-02/First-MERN-REST-Fullstack",
    demo: "https://valentino-first-fullstack.herokuapp.com",
    animation: "fade-right",
  },
  */
  {
    id: 4,
    img: Img4,
    title: "Personal Webpage",
    description: "This very page. Made with React. Language support with i18-next",
    github: "https://github.com/Valentino-02/Web-Portfolio",
    demo: "https://personal-portfolio-web.herokuapp.com",
    animation: "fade-right",
  },
];

const Portfolio = () => {
  const { t } = useTranslation();

  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);
  return (
    <section id="portfolio">
      <h2>{t("projects_title")}</h2>

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
