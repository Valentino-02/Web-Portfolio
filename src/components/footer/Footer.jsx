import "./footer.css";
import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <a href="#home" className="footer_logo">
        VALENTINO
      </a>

      <ul className="permalinks">
        <li>
          <a href="#home">{t("home")}</a>
        </li>
        <li>
          <a href="#about">{t("about")}</a>
        </li>
        <li>
          <a href="#experience">{t("experience")}</a>
        </li>
        <li>
          <a href="#portfolio">{t("portfolio")}</a>
        </li>
        <li>
          <a href="#contact">{t("contact")}</a>
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
