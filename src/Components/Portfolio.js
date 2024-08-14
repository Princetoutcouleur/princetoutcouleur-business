import React from "react";
import Solar from "../Asset/projects/solar-life.png";
import CardProject from "./CardProject";

const Portfolio = () => {
  const CardData = [
    {
      title: "solar life",
      image: Solar,
      description:
        "Un site vitrine moderne et responsive pour une entreprise solaire.",
      url: "https://solar-life.vercel.app/",
    },
  ];
  return (
    <div id="Portfolio" className="container-fluid py-5">
      <div className="container">
        <div className="mb-5">
          <h2 className="mb-3">Quelques piéces de mon travail</h2>
          <p>
            Découvrez certains de mes récents projets réalisés avec beaucoup de <br />
            savoir-faire et adaptés aux besoins spécifiques de mes clients.
          </p>
        </div>
        <div className="row">
            {CardData.map((card) => (
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mb-3">
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
