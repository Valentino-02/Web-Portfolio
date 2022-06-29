import "./experience.css";
import React from "react";
import { BiMessageSquareDetail } from "react-icons/bi";

const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div>
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BiMessageSquareDetail className="experience_details_icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience_details">
              <BiMessageSquareDetail className="experience_details_icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience_details">
              <BiMessageSquareDetail className="experience_details_icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
        <div>
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BiMessageSquareDetail className="experience_details_icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience_details">
              <BiMessageSquareDetail className="experience_details_icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience_details">
              <BiMessageSquareDetail className="experience_details_icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
