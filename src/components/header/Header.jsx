import "./header.css";
import React from "react";
import HeaderSocials from "./HeaderSocials.jsx";
import Languages from "./Languages";

import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header id="home">
      <div className="container header_container">
        <div className="introduction">
          <h5>{t("intro")}</h5>
          <h1>Valentino</h1>
          <h5 className="text-light">{t("title")}</h5>
        </div>

        <HeaderSocials />
        <Languages />
      </div>
    </header>
  );
};

export default Header;
