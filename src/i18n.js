import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const translationsEn = {
  intro: "Hello There! My name is",
  title: "Aspiring Web Developer",
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
  info: "I am a fullstack developer from Argentina. I became interested in learning python to do data science for my degree in physics. Then I learned to use the open source game engine Godot, to do game-dev. And finally I decided to pursue a career in fullstack development. Fullstack won me over, because of the immense impact it has on the world, and just how relevant it is. My priorities as an employee are writing clean and efficient code, being a team player, and finding creative solutions. If you think I can be of use to you, don't doubt contacting me!",
};

const translationsEs = {
  intro: "Hola! Me llamo",
  title: "Aspirante a Desarrollador Web",
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
  info: "Soy un desarrollador fullstack de Argentina. Me interese en aprender python para hacer data science para carrera en física. Despues aprendi a usar el motor de videojuegos open source Godot, para hacer game-dev. Y finalmente decidi meterme de lleno en el mundo del desarrollo y las tecnologias. Me decidi por hacer desarrolo Fullstack, por el inmenso impacto que tiene en el mundo. Mis prioridades como empleado son escribir codigo eficiente y ordenado, ser un jugador de equipo, y encontrar soluiones creativas a diversos problemas. Si usted cree que le puedo ser de utilidad, no dude en contactarme!",
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
