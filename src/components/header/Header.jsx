import "./header.css";
import React from "react";
import CTA from "./CTA.jsx";
import HeaderSocials from "./HeaderSocials.jsx";
import Portrait from "../../assets/me.png";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I am</h5>
        <h1>Valentino</h1>
        <h5 className="text-light">Aspiring fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="portrait">
          <img src={Portrait} alt="portrait" />
        </div>

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
