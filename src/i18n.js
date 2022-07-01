import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const translationsEn = { key: "Hello There! My name is" };
const translationsEs = { key: "Como va!" };

i18n
  .use(initReactI18next)

  .init({
    resources: {
      en: { translation: translationsEn },
      es: { translation: translationsEs },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
