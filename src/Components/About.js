import React from "react";

const About = () => {
  return (
    <div id="About" className="container-fluid py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-12">
            <h2 className="mb-3">A propos de moi</h2>
            <p>
              Je suis un développeur front-end passionné, doté d'un sens aigu du
              design et d'une compréhension approfondie de l'expérience
              utilisateur. Je me spécialise dans la création d'applications Web
              belles, réactives et performantes qui ravissent les utilisateurs
              et génèrent des résultats commerciaux.
            </p>
            <p>
              En plus de mes compétences en développement front-end, je suis
              également optimiseur de profils sur les réseaux sociaux. J'aide
              les particuliers et les entreprises à optimiser leur présence en
              ligne, à accroître leur portée et à interagir plus efficacement
              avec leur public cible.
            </p>
          </div>
          <div className="col-lg-6 col-md-12 col-12 ">
            <h2 className="mb-3">Mes Compétences</h2>
            <div className="row">
              <div className=" col-lg-6 col-md-6 col-sm-12 mb-3">
                <div className="card rounded-0 shadow p-2">
                  <h3 className="card-title">Développement front-end</h3>
                  <ul>
                    <li>HTML/CSS</li>
                    <li>Bootstrap</li>
                    <li>JavaScript</li>
                    <li>React</li>
                  </ul>
                </div>
              </div>
              <div className=" col-lg-6 col-md-6 col-sm-12 mb-3">
                <div className="card rounded-0 shadow p-2">
                  <h3 className="card-title">
                    Optimisation des réseaux sociaux
                  </h3>
                  <ul>
                    <li>Optimisation de profil</li>
                    <li>Stratégie de contenu</li>
                    <li>Engagement des cibles</li>
                    <li>Ciblage d'audience</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
