import "./cta.css";
import React from "react";
import { useTranslation } from "react-i18next";

const CTA = (props) => {
  const { t } = useTranslation();

  return (
    <div className={props.isOnTop ? "cta_top" : "cta_bottom"}>
      <a href="#contact">
        <h5 className="cta_text">{t("cta")}</h5>
      </a>
    </div>
  );
};

export default CTA;
