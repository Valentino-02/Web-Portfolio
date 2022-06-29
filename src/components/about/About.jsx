import "./about.css";
import React from "react";
import Portrait from "../../assets/me-about.jpg";
import { BiMessageSquareDetail } from "react-icons/bi";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="portrait_about_me">
            <img src={Portrait} alt="portrait" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <BiMessageSquareDetail className="about_icon" />
              <h5>Knowledge1</h5>
              <small>Something</small>
            </article>
            <article className="about_card">
              <BiMessageSquareDetail className="about_icon" />
              <h5>Knowledge2</h5>
              <small>Something</small>
            </article>
            <article className="about_card">
              <BiMessageSquareDetail className="about_icon" />
              <h5>Knowledge3</h5>
              <small>Something</small>
            </article>
          </div>
          <p>
            lorem issaaasssaa aaaaaaaaaaaa sssssdddd ddddddddfff lorem
            issaaasssaa aaaaaaaaaaaa sssssdddd ddddddddfff lorem issaaasssaa
            aaaaaaaaaaaa sssssdddd ddddddddfff lorem issaaasssaa aaaaaaaaaaaa
            sssssdddd ddddddddfff
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
