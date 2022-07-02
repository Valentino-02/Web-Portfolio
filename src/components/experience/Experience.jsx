import "./experience.css";
import { React, useEffect } from "react";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import Aos from "aos";
import "aos/dist/aos.css";

const Experience = () => {
  const { t } = useTranslation();

  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);

  return (
    <section id="experience">
      <h2>{t("skills_title")}</h2>

      <div className="container experience_container">
        <div data-aos="flip-up">
          <div>
            <h3>Frontend Development</h3>
            <div className="experience_content">
              <article className="experience_details">
                <BiMessageSquareDetail className="experience_details_icon" />
                <h4>JavaScript</h4>
              </article>
              <article className="experience_details">
                <BiMessageSquareDetail className="experience_details_icon" />
                <h4>HTML</h4>
              </article>
              <article className="experience_details">
                <BiMessageSquareDetail className="experience_details_icon" />
                <h4>CSS</h4>
              </article>
              <article className="experience_details">
                <BiMessageSquareDetail className="experience_details_icon" />
                <h4>React</h4>
              </article>
              <article className="experience_details">
                <BiMessageSquareDetail className="experience_details_icon" />
                <h4>Redux</h4>
              </article>
              <article className="experience_details">
                <BiMessageSquareDetail className="experience_details_icon" />
                <h4>Axios</h4>
              </article>
            </div>
          </div>
        </div>
        <div data-aos="flip-up">
          <div>
            <h3>Backend Development</h3>
            <div className="experience_content">
              <article className="experience_details">
                <BiMessageSquareDetail className="experience_details_icon" />
                <h4>Python</h4>
              </article>
              <article className="experience_details">
                <BiMessageSquareDetail className="experience_details_icon" />
                <h4>Node JS</h4>
              </article>
              <article className="experience_details">
                <BiMessageSquareDetail className="experience_details_icon" />
                <h4>Express</h4>
              </article>
              <article className="experience_details">
                <BiMessageSquareDetail className="experience_details_icon" />
                <h4>MongoDB</h4>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
