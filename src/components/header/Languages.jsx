import React from "react";
import { useTranslation } from "react-i18next";

const lngs = {
  en: { nativeName: "English" },
  es: { nativeName: "Español" },
};

const Languages = () => {
  const { i18n } = useTranslation();
  return (
    <div className="languages">
      <h5>Maybe in?</h5>
      {Object.keys(lngs).map((lng) => (
        <button
          className="btn btn-primary"
          key={lng}
          type="submit"
          onClick={() => i18n.changeLanguage(lng)}
        >
          {lngs[lng].nativeName}
        </button>
      ))}
    </div>
  );
};

export default Languages;
