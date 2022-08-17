import "./contact.css";
import React from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRef } from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "contact_service",
        "contact_template",
        form.current,
        "TS7C31iP__6NcJBsp"
      )
      .then(
        (result) => {
          toast("Message sent!");
        },
        (error) => {
          toast("Error in sending the message");
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h2>{t("contact_title")}</h2>

      <div className="form_container">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder={t("contact_name")}
            required
          />
          <input
            type="email"
            name="email"
            placeholder={t("contact_email")}
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder={t("contact_message")}
            required
          />
          <button type="submit" className="btn btn-primary">
            {t("contact_send")}
          </button>
        </form>
      </div>

      <div className="contact_options">
        <article className="contact_option">
          <h4>Email: </h4>

          <a href="mailto:collazo.valentino@gmail.com">
            <h2>collazo.valentino@gmail.com</h2>
          </a>
        </article>
        <article className="contact_option">
          <h4>Whatsapp: </h4>

          <p>
            <h2>+54 9 294-4666190</h2>
          </p>
        </article>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
