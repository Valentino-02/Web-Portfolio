import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const translationsEn = {
  intro: "Hello There! My name is",
  title: "Aspiring Fullstack Developer",
  cta: "Let's Talk!",
  about_title: "About Me",
  interests: "interests",
  phycicist: "phycicist",
  phycicist_d: "finishing the degree",
  cook: "cook",
  cook_d: "years of professional cooking",
  musician: "musician",
  musician_d: "life-long musician",
  game_dev: "game dev",
  game_dev_d: "game_dev hobby",
  skills_title: "My Skills",
  projects_title: "My Projects",
  contact_title: "Contact Me",
  contact_name: "Your Full Name",
  contact_email: "Your Email",
  contact_message: "Your Message",
  contact_send: "Send Message",
  home: "Home",
  contact: "Contact",
  about: "About",
  experience: "Experience",
  portfolio: "Portfolio",
};

const translationsEs = {
  intro: "Hola! Me llamo",
  title: "Aspirante a Desarrollador Fullstack",
  cta: "Hablemos!",
  about_title: "Acerca de mi",
  interests: "intereses",
  phycicist: "físico",
  phycicist_d: "terminando la carrera",
  cook: "cocinero",
  cook_d: "años de cocina profesional",
  musician: "musico",
  musician_d: "musico de toda la vida",
  game_dev: "game dev",
  game_dev_d: "hobby en game-dev",
  skills_title: "Mis Conocimientos",
  projects_title: "Mis Proyectos",
  contact_title: "Contactame",
  contact_name: "Su Nombre Completo",
  contact_email: "Su Email",
  contact_message: "Su Mensaje",
  contact_send: "Enviar Mensaje",
  home: "Inicio",
  contact: "Contacto",
  about: "Info",
  experience: "Experiencia",
  portfolio: "Portafolio",
};

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
