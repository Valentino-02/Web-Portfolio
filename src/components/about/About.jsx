import "./about.css";
import  { React, useEffect} from "react";
import Portrait from "../../assets/me.jpg";
import { BiMessageSquareDetail } from "react-icons/bi";
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
        <p>
          My name is Valentino Collazo, and I am a self thought developer from
          Argentina. My journey with development started on july of 2021, when I
          became interested in learning python to start doing some data analysis
          and ploting for physiscs. After getting used to do stuff with it, I
          desided to see if I was able to fullfill a life-long dream of making a
          computer game. The open source game engine Godot uses a custom
          language, GDScript, which is quite similar to python, so I learned how
          to use it and made my first decent game, Photons Journey. At this
          point my love for development grew exponentially, and decided to
          pursue a career in Web Development. I learned some of the most
          standard languages and technologys that the industry is using, and
          right now I am looking for a job to further my growth. I am very
          reliable, and have great comunication and problem solving skills.
        </p>

        <div className="portrait_about_me">
          <img src={Portrait} alt="portrait" />
        </div>
      </div>

      <h2>{t("interests")}</h2>

      <div className="about_cards">
        <div data-aos="fade-up">
          <article className="about_card">
            <BiMessageSquareDetail className="about_icon" />
            <h5>{t("phycicist")}</h5>
            <small>{t("phycicist_d")}</small>
          </article>
        </div>

        <div data-aos="fade-up">
          <article className="about_card">
            <BiMessageSquareDetail className="about_icon" />
            <h5>{t("cook")}</h5>
            <small>{t("cook_d")}</small>
          </article>
        </div>

        <div data-aos="fade-up">
          <article className="about_card">
            <BiMessageSquareDetail className="about_icon" />
            <h5>{t("musician")}</h5>
            <small>{t("musician_d")}</small>
          </article>
        </div>

        <div data-aos="fade-up">
          <article className="about_card">
            <BiMessageSquareDetail className="about_icon" />
            <h5>{t("game_dev")}</h5>
            <small>{t("game_dev_d")}</small>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
