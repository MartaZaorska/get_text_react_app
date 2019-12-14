import React from "react";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <section className="navbar_logo">
        <Link to="/" className="navbar_logo__link">
          <i className="far fa-eye"></i>
        </Link>
      </section>
      <section className="navbar__list">
        <Link to="/" className="navbar__link navbar__link--mobile">
          <i className="fas fa-home"></i>
        </Link>
        <Link to="/files" className="navbar__link">
          <i className="fas fa-list-ul"></i>
        </Link>
        <button className="navbar__button navbar__button--mobile">
          <i className="fas fa-plus"></i>
        </button>
        <Link to="/contact" className="navbar__link">
          <i className="fas fa-info"></i>
        </Link>
        <button className="navbar__link">
          <i className="fas fa-palette"></i>
        </button>
      </section>
    </nav>
  );
}

export default Navbar;
