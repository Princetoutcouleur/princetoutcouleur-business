import React from "react";
import baba from "../Asset/baba.png";

const Header = () => {
  return (
    <div id="Header" className="container-fluid">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 ">
            <h1 className="mb-3">
              Développeur frontend et optimiseur de réseaux sociaux
            </h1>
            <p className="mb-5 fs-5">
              Je suis Baba Thiam, un développeur front-end passionné et un
              expert en optimisation des profils de réseaux sociaux. Basé à
              Dakar, Sénégal, je combine mon expertise technique en
              développement web avec une stratégie de marketing digital pour
              aider mes clients à maximiser leur visibilité et leurs ventes sur
              les plateformes sociales.
            </p>
            <div className="d-flex gap-3">
              <a href="#Contact">
                <button className="btn btn-dark">Contacter Moi</button>
              </a>
              <a href="#Portfolio">
                <button className="btn btn-light border border-dark border-1">
                  Voir Mes Réalisations
                </button>
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
            <div>
              <img src={baba} alt="" className="img-fluid rounded-circle" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
