import React from "react";

const Header = () => {
  return (
    <div id="Header" className="container-fluid">
      <div className="container pt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-12 mb-5 pt-5 text-center " data-aos="fade-up">
            <h1 className="mb-3" >
              J’aide les entreprises à avoir une <span className="gradient-text">
                meilleure
              </span> présence en ligne grâce à un <span className="gradient-text">site web professionel</span>.
            </h1>
            <p className="mb-5">
              Ensemble, on va bâtir un site web qui met en lumière votre
              activité
            </p>
            <div className="" data-aos="zoom-out">
              <a href="https://tally.so/r/m6vN5o">
                <button className="btn btn-default border border-dark border-1 yellow px-4 rounded-pill text-white">
                Discutons de votre projet
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
