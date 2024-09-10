import React from "react";
import baba from "../Asset/baba.png";

const Navigation = () => {
  return (
    <nav
      id="Navigation"
      className="navbar navbar-expand-lg text-white container-fluid d-flex justify-content-between fixed-top"
    >
      <div className="container d-flex justify-content-between align-items-center">
        <div className="d-flex gap-3 align-items-center" data-aos="fade-right">
          <img
            src={baba}
            className="img-fluid rounded-circle"
            width="40px"
            alt=""
          />
          <p className="fw-bold mt-3 fs-6">Baba Thiam</p>
        </div>
        <ul className="NavItem list-unstyled d-none d-lg-flex gap-4 pt-3" data-aos="fade-down">
          <li>
            <a href="#" className="text-decoration-none text-white">
              Accueil
            </a>
          </li>
          <li>
            <a href="#Services" className="text-decoration-none text-white">
              Offre
            </a>
          </li>
          <li>
            <a href="#Question" className="text-decoration-none text-white">
              Questions
            </a>
          </li>
          <li>
            <a href="#Contact" className="text-decoration-none text-white">
              Contact
            </a>
          </li>
        </ul>
        <div data-aos="fade-left">
          <a href="#Contact">
            <button className="btn btn-default yellow rounded-pill text-white">
              Me contacter
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
