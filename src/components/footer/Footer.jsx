import "./footer.css";
import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer_logo">
        VALENTINO
      </a>

      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://github.com">
          <FaGithub />
        </a>
        <a href="https://github.com">
          <BsLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
