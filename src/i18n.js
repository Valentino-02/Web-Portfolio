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
  info: "My name is Valentino Collazo, and I am a self thought developer from Argentina. My journey with development started on july of 2021, when I became interested in learning python to start doing some data analysis and ploting for physiscs. After getting used to do stuff with it, I decided to see if I was able to fullfill a life-long dream of making a computer game. The open source game engine Godot uses a custom language, GDScript, which is quite similar to python, so I learned how to use it and made my first decent game, Photons Journey. At this point my love for development grew exponentially, and decided to pursue a career in Web Development. I learned some of the most standard languages and technologys that the industry is using, and right now I am looking for a job to further my growth. I am very reliable, and have great comunication and problem solving skills.",
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
  info: "Mi nombre es Valentino Collazo, y soy un desarrollador de software autodidacta de Argentina. Empeze con el mundo de desarrolo de software en julio de 2021, cuando me interese en aprender python para hacer analisis de datos, y ploteos para el area de fisica. Despues de familiarizarme con la herramienta, decidi ver si era capaz de realizar un sueño de toda la vida, crear un videojuego. El motor de codigo libre Godot usa el lenguaje GdScript, el cual es muy similar a python, por lo tanto aprendi a utilizarlo y pude crear mi primer juego decente, Photons Journey. En este punto mi pasion por el desarrollo crecio exponencialmente, y decidi emprender una carrera como desarrolador web. Aprendi algunas de las tecnologias y lenguajes mas utilizadas en la industria, y ahora mismo me encuentro en busqueda laboral. Soy muy confiable, y tengo grandes capacidades de comunicacion y resolucion de problemas.",
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
