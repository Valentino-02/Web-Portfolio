import "./experience.css";
import { React, useEffect } from "react";
import {
  SiAntdesign,
  SiReact,
  SiRedux,
  SiMaterialui,
  SiExpress,
  SiMongodb,
  SiGraphql,
  SiHeroku,
} from "react-icons/si";
import { DiJavascript1, DiPython } from "react-icons/di";
import { FaLanguage, FaNodeJs, FaDatabase, FaMoneyCheckAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Aos from "aos";
import "aos/dist/aos.css";

import cv from '../../assets/CV.pdf'

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
                <DiJavascript1 className="experience_details_icon" />
                <h4>JavaScript</h4>
              </article>
              <article className="experience_details">
                <DiJavascript1 className="experience_details_icon" />
                <h4>TypeScript</h4>
              </article>
              <article className="experience_details">
                <SiReact className="experience_details_icon" />
                <h4>React</h4>
              </article>
              <article className="experience_details">
                <SiRedux className="experience_details_icon" />
                <h4>Redux</h4>
              </article>
              <article className="experience_details">
                <SiMaterialui className="experience_details_icon" />
                <h4>Material-UI</h4>
              </article>
              <article className="experience_details">
                <SiAntdesign className="experience_details_icon" />
                <h4>AntDesign</h4>
              </article>
              <article className="experience_details">
                <FaLanguage className="experience_details_icon" />
                <h4>i18next</h4>
              </article>
            </div>
          </div>
        </div>
        <div data-aos="flip-up">
          <div>
            <h3>Backend Development</h3>
            <div className="experience_content">
              <article className="experience_details">
                <DiPython className="experience_details_icon" />
                <h4>Python</h4>
              </article>
              <article className="experience_details">
                <FaNodeJs className="experience_details_icon" />
                <h4>Node JS</h4>
              </article>
              <article className="experience_details">
                <SiExpress className="experience_details_icon" />
                <h4>Express</h4>
              </article>
              <article className="experience_details">
                <SiMongodb className="experience_details_icon" />
                <h4>MongoDB</h4>
              </article>
              <article className="experience_details">
                <SiGraphql className="experience_details_icon" />
                <h4>GraphQl</h4>
              </article>
              <article className="experience_details">
                <FaDatabase className="experience_details_icon" />
                <h4>Sanity</h4>
              </article>
              <article className="experience_details">
                <FaMoneyCheckAlt className="experience_details_icon" />
                <h4>Stripe</h4>
              </article>
            </div>
          </div>
        </div>
      </div>
      <div className="subtitle"> <h4>more info on my</h4> <a href={cv} target="_blank" rel="noreferrer">
        CV
      </a></div>
    </section>
  );
};

export default Experience;
