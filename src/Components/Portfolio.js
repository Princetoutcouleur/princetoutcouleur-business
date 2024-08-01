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
        "Marque de sneakers vendue sur les réseaux sociaux. Stratégie de marketing digital réussie.",
      url: "https://daleundakaru.com",
    },
    {
      title: "tayeur",
      image: Tayeur,
      description:
        "Intégration d'UI avec React.js et Bootstrap pour améliorer l'expérience utilisateur.",
      url: "https://tayeur-gestion.vercel.app/",
    },
  ];
  return (
    <div id="Portfolio" className="container-fluid py-5">
      <div className="container">
        <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12 mb-5">
          <h2 className="mb-3">Quelques piéces de mon travail</h2>
          <p>
          Découvrez certains de mes récents projets réalisés avec beaucoup de savoir-faire et adaptés aux besoins spécifiques de mes clients.
          </p>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12 row">
          {CardData.map((card) => (
            <div className="col-lg-6 col-md-6 col-sm-12 pb-3">
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
    </div>
  );
};

export default Portfolio;
