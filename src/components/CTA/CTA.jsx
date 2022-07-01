import "./cta.css";
import React from "react";

const CTA = (props) => {
  return (
    <div className={props.isOnTop ? "cta_top" : "cta_bottom"}>
      {props.isOnTop ? console.log("yes") : console.log("no")}
      <a href="#contact">
        <h5 className="cta_text">Lets Talk!</h5>
      </a>
    </div>
  );
};

export default CTA;
