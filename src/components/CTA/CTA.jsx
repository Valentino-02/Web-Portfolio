import "./cta.css";
import React from "react";
import { RiKakaoTalkFill } from "react-icons/ri";

const CTA = (props) => {
  return (
    <div className={props.isOnTop ? "cta_top" : "cta_bottom"}>
      <a href="#contact">
        <RiKakaoTalkFill />
      </a>
    </div>
  );
};

export default CTA;
