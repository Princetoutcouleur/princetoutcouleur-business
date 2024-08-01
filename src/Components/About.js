import React from "react";

const About = () => {
  return (
    <div id="About" className="container-fluid py-5 text-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-12 mb-3">
            <h2 className="mb-3 text-capitalize">à propos</h2>
            <h1 className="mb-3 gradient-text">The_Princetoutcouleur</h1>
            <p>
            Je m'appelle Baba Thiam alias The_Princetoutcouleur, je suis spécialisé dans la création de sites vitrines, de landing pages sur mesure et le SEO. Ma mission est de vous aider à booster votre présence en ligne, à augmenter votre notoriété et à stimuler vos ventes.
            </p>
            <p>
            En tant qu’expert en développement web, je mets mon savoir-faire à votre service pour créer des solutions web adaptées à vos besoins spécifiques.
            </p>
          </div>
          <div className="col-lg-6 col-md-12 col-12 mb-3">
            <h2 className="mb-3 text-capitalize">Pourquoi Moi ?</h2>
            <ul className="mb-3">
              <li className="mb-3"><strong className="fw-bold">Expertise Personnalisée</strong> : Avec moi, chaque projet bénéficie d'une attention individuelle et d'une expertise pointue.</li>
              <li className="mb-3"><strong className="fw-bold">Solutions Sur Mesure</strong> : Chaque site ou landing page est conçu selon vos besoins spécifiques et objectifs.</li>
              <li className="mb-3"><strong className="fw-bold">Accompagnement Complet</strong> : Je vous guide tout au long du processus, de la conception à la mise en ligne.</li>
            </ul>
            <a href="#Contact">
                <button className="btn btn-link border border-warning border-1 text-warning">
                  Contacter Moi
                </button>
              </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
