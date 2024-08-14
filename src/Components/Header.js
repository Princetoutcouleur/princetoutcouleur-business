import React from "react";

const Header = () => {
  return (
    <div id="Header" className="container-fluid">
      <div className="container py-5">
        <div className="d-flex justify-content-center align-items-center py-5">
          <div className=" text-center">
            <h1 className="mb-3 text-capitalize">
              Attirez de<br /> <span className="gradient-text">nouveaux prospects</span> <br /> comme jamais auparavant
            </h1>
            <h2 className="text-capitalize fw-bold">Boostez Votre Présence en Ligne avec un site web professionnel</h2>
            <h3 className="mb-5">
            Transformez votre vision en réalité digitale avec The_Princetoutcouleur.
            </h3>
            <div className="d-flex justify-content-center gap-3">
              <a href="#Contact">
                <button className="btn btn-default border border-dark border-1 yellow">
                  Contacter Moi
                </button>
              </a>
              <a href="#Portfolio">
                <button className="btn btn-light border border-dark border-1">
                  Voir Mes Réalisations
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
