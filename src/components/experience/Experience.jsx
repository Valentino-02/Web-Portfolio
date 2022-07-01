import "./experience.css";
import React from "react";
import { BiMessageSquareDetail } from "react-icons/bi";

const Experience = () => {
  return (
    <section id="experience">
      <h2>My Skills</h2>

      <div className="container experience_container">
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
    </section>
  );
};

export default Experience;
