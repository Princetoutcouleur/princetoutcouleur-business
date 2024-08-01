import React from "react";
import CardServices from "./CardServices";
import icondev from "../Asset/dev icon services.png";
import iconMarketing from "../Asset/boost icon services.png";
import iconlanding from "../Asset/landing icon.png";

const Services = () => {
  const CardData = [
    {
      img: icondev,
      title: "Création de Sites Vitrines",
      description:
        "Présentez votre entreprise ou votre produit de manière professionnelle avec un site vitrine attrayant.",
      message:
        "Bonjour, je veux plus d'information concernant vos services de Création de Sites Vitrines",
    },
    {
      img: iconMarketing,
      title: "Stratégies de SEO et de Référencement",
      description:
        "Améliorez votre visibilité en ligne avec des stratégies de SEO efficaces.",
      message:
        "Bonjour, je veux plus d'information concernant vos services de SEO et de référencement",
    },
    {
      img: iconlanding,
      title: "Développement de Landing Pages",
      description:
        "Optimisez vos conversions avec des landing pages pour maximiser les leads.",
      message:
        "Bonjour, je veux plus d'information concernant vos services de Développement de Landing Pages",
    },
  ];
  return (
    <div id="Services" className="container-fluid py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="mb-3">Mes Services</h2>
          <p>
          Découvrez comment je peux vous aider à atteindre vos objectifs en ligne..
          </p>
        </div>
        <div className="row">
          {CardData.map((card) => (
            <div className="col-lg-4 col-md-6 col-sm-12 pb-3">
              <CardServices
                img={card.img}
                title={card.title}
                description={card.description}
                message={card.message}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
