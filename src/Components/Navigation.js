import React from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav id="Navigation" className="navbar navbar-expand-lg text-white fixed-top">
      <div className="container">
        <a className="navbar-brand text-white fw-semibold" href="/">
          The_Princetoutcouleur
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FaBarsStaggered className="text-white fs-3" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto ">
            <Link
              to="/"
              className="nav-link fw-bold text-white text-decoration-none"
            >
              Accueil
            </Link>

            <a
              className="nav-link fw-bold text-white text-capitalize"
              href="/#About"
            >
              à propos
            </a>
            <a className="nav-link fw-bold text-white" href="/#Services">
              Services
            </a>
            <a className="nav-link fw-bold text-white" href="/#Portfolio">
              Portfolio
            </a>
            <Link
              to="/blog"
              className="nav-link fw-bold text-white text-decoration-none"
            >
              Blog
            </Link>
            <a className="nav-link fw-bold text-white" href="/#Contact">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
