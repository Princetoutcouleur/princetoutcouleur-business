import React from "react";
import Daleundakaru from "../Asset/projects/daleundakaru.png";
import Tayeur from "../Asset/projects/tayeur.png";
import CardProject from "./CardProject";

const Portfolio = () => {
  const CardData = [
    {
      title: "daleu ndakaru",
      image: Daleundakaru,
      description:
        "Création et gestion d'une marque de sneakers vendue sur les réseaux sociaux. Augmentation de la base de clients et des ventes grâce à une stratégie de marketing digital efficace.",
      url: "https://daleundakaru.com",
    },
    {
      title: "tayeur",
      image: Tayeur,
      description:
        "Pour ma première mission professionnelle, j'ai intégré les interfaces utilisateur avec React.js et Bootstrap, en collaboration avec l'équipe backend, améliorant ainsi l'expérience utilisateur et la communication entre les équipes.",
      url: "https://tayeur-gestion.vercel.app/",
    },
  ];
  return (
    <div id="Portfolio" className="container-fluid py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="mb-3">Mon Portfolio</h2>
          <p>
          Découvrez certains de mes récents projets de développement frontend.
          </p>
        </div>
        <div className="row">
          {CardData.map((card) => (
            <div className="col-lg-4 col-md-6 col-sm-12 pb-3">
              <CardProject
                image={card.image}
                title={card.title}
                description={card.description}
                url={card.url}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
