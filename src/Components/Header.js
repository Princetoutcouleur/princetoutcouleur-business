import React from "react";

const Header = () => {
  return (
    <div id="Header" className="container-fluid">
      <div className="container py-5">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-12 mb-5 pt-5 text-center">
            <h1 className="mb-3 text-capitalize">
              Attirez de<br /> <span className="gradient-text">nouveaux prospects</span> <br /> comme jamais auparavant
            </h1>
            <p className="fs-6 fw-bold">Bienvenue chez The_princetoutcouleur Agency</p>
            <p className="mb-5">
              Votre partenaire digital pour transformer votre présence en ligne.
            </p>
            <div className="d-flex justify-content-center gap-3">
              <a href="#Contact">
                <button className="btn btn-default border border-dark border-1 yellow">
                  Contacter Nous
                </button>
              </a>
              <a href="#Portfolio">
                <button className="btn btn-light border border-dark border-1">
                  Voir Nos Réalisations
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
