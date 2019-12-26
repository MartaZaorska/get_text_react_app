import React from "react";
import { Link } from "react-router-dom";

import useAnimationSection from "../hooks/useAnimationSection";

function Home() {
  useAnimationSection("home");

  return (
    <section className="section__wrapper home">
      <section className="home__content">
        <h1 className="home__title">GeText Application</h1>
        <p className="home__text">
          Create groups of files, manage texts and get the text from the
          uploaded photo using OCR - optical character recognition.
        </p>
        <Link to="/files" className="home__link">
          <span className="stripe"></span> start
        </Link>
      </section>
      <section className="home__background">
        <img
          src="https://cdn130.picsart.com/237357485065212.png?r1024x1024"
          alt="palm leaf"
          className="leaf leaf_top"
        />
        <img
          src="https://cdn130.picsart.com/237357485065212.png?r1024x1024"
          alt="palm leaf"
          className="leaf leaf_bottom"
        />
      </section>
    </section>
  );
}

export default Home;
