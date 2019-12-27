import React from "react";

import useAnimationSection from "../hooks/useAnimationSection";

function Contact() {
  useAnimationSection("contact");

  return (
    <section className="contact section__wrapper">
      <h1 className="contact__title">Contact</h1>
      <section className="contact__wrapper">
        <section className="contact__content">
          <p className="contact__text">
            <a
              href="https://tesseract.projectnaptha.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Tesseract.js
            </a>{" "}
            library used to read the text from the pictures (OCR technique).
          </p>
          <h3 className="contact__subtitle">OTHER SOURCES USED ON THE SITE</h3>
          <p className="contact__text">
            Icons from{" "}
            <a
              href="https://fontawesome.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Font Awesome
            </a>
            .
          </p>
          <p className="contact__text">
            Picture from{" "}
            <a
              href="https://picsart.com/i/sticker-palmeras-tropical-green-237357485065212"
              rel="noopener noreferrer"
              target="_blank"
            >
              PicsArt
            </a>
            .
          </p>
        </section>
        <section className="contact__content">
          <p className="contact__text">
            The application was created by Marta Zaorska.
          </p>
          <h3 className="contact__subtitle">
            IF YOU WANT TO CONTACT ME OR VIEW MY OTHER WORKS
          </h3>
          <p className="contact__text">marta.zaorska2@gmail.com</p>
          <section className="contact__links">
            <a
              href="https://github.com/martazaorska"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://martazaorska.github.io/portfolio/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fas fa-home"></i>
            </a>
            <a
              href="https://www.facebook.com/marta.zaorska.31"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
          </section>
        </section>
      </section>
      <p className="contact__copyright">
        &copy; Marta Zaorska {new Date().getFullYear()}
      </p>
    </section>
  );
}

export default Contact;
