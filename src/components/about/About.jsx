import "./about.css";
import { React, useEffect } from "react";
import Portrait from "../../assets/Photo.png";
import { TbMathFunction } from "react-icons/tb";
import { GiCook } from "react-icons/gi";
import { FaGuitar, FaGamepad } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);

  return (
    <section id="about">
      <h2>{t("about_title")}</h2>

      <div className="container about_container">
        <p>{t("info")}</p>

        <div className="portrait_about_me">
          <img src={Portrait} alt="portrait" />
        </div>
      </div>

      <h2>{t("interests")}</h2>

      <div className="about_cards">
        <div data-aos="fade-up">
          <article className="about_card">
            <TbMathFunction className="about_icon" />
            <h5>{t("phycicist")}</h5>
            <small>{t("phycicist_d")}</small>
          </article>
        </div>

        <div data-aos="fade-up">
          <article className="about_card">
            <GiCook className="about_icon" />
            <h5>{t("cook")}</h5>
            <small>{t("cook_d")}</small>
          </article>
        </div>

        <div data-aos="fade-up">
          <article className="about_card">
            <FaGuitar className="about_icon" />
            <h5>{t("musician")}</h5>
            <small>{t("musician_d")}</small>
          </article>
        </div>

        <div data-aos="fade-up">
          <article className="about_card">
            <FaGamepad className="about_icon" />
            <h5>{t("game_dev")}</h5>
            <small>{t("game_dev_d")}</small>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
