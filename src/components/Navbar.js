import React from "react";
import { Link } from "react-router-dom";

function Navbar({ toggleMode, openModal }) {
  return (
    <nav className="navbar">
      <section className="navbar_logo">
        <Link to="/" className="navbar_logo__link">
          <img src="./images/icons/app_icon_64x64.png" alt="logo" />
        </Link>
      </section>
      <section className="navbar__list">
        <Link to="/" className="navbar__link navbar__link--mobile">
          <i className="fas fa-home"></i>
        </Link>
        <Link to="/files" className="navbar__link">
          <i className="fas fa-list-ul"></i>
        </Link>
        <button
          onClick={() => openModal("groups")}
          className="navbar__button navbar__button--mobile"
        >
          <i className="fas fa-plus"></i>
        </button>
        <Link to="/contact" className="navbar__link">
          <i className="fas fa-info"></i>
        </Link>
        <button onClick={toggleMode} className="navbar__link">
          <i className="fas fa-adjust"></i>
        </button>
      </section>
    </nav>
  );
}

export default Navbar;
