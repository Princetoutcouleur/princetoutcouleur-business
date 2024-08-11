import React from "react";

const Footer = () => {
  return (
    <div className="footer pb-3">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <p className="ms-3">
            <span className="gradient-text fw-bold">The_Princetoutcouleur</span>{" "}
            <br />
            Transformez votre vision en réalité digitale.
          </p>
        </div>
        <div>
          <a href="/#Header">
            <button className="btn btn-link border border-warning border-1 text-warning m-3 rounded-pill">
              Remonter
            </button>
          </a>
        </div>
      </div>
      <div className="container text-center mt-3">
        <p>&copy; 2024 The_Princetoutcouleur. Tous droits réservés.</p>
      </div>
    </div>
  );
};

export default Footer;
