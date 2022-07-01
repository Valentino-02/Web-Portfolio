import "./contact.css";
import React from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { BiMessageSquareDetail } from "react-icons/bi";

const Contact = () => {
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
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>

      <div className="form_container">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
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

          <a href="https://api.whatsapp.com/send?phone=+541294-4666190">
            <h2>+54 1 294-4666190</h2>
          </a>
        </article>
      </div>
    </section>
  );
};

export default Contact;
