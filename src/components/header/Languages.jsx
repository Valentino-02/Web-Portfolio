import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Languages = () => {
  const [activeLang, setActiveLang] = useState("en");
  const { i18n } = useTranslation();
  return (
    <div className="languages">
      <button
        className={
          activeLang === "en" ? "btn btn-primary-2 active" : "btn btn-primary-2"
        }
        type="submit"
        onClick={() => {
          i18n.changeLanguage("en");
          setActiveLang("en");
        }}
      >
        English
      </button>
      <button
        className={
          activeLang === "es" ? "btn btn-primary-2 active" : "btn btn-primary-2"
        }
        type="submit"
        onClick={() => {
          i18n.changeLanguage("es");
          setActiveLang("es");
        }}
      >
        Español
      </button>
    </div>
  );
};

export default Languages;
