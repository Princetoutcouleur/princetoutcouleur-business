import React from "react";
import Solar from "../Asset/projects/solar-life.png";
import CardProject from "./CardProject";

const Portfolio = () => {
  const CardData = [
    {
      title: "Solar Life",
      image: Solar,
      description:
        "Site web pour une entreprise d'énergie solaire.",
      url: "https://solar-life.vercel.app/",
    },
    {
      title: "Solar Life",
      image: Solar,
      description:
        "Site web pour une entreprise d'énergie solaire.",
      url: "https://solar-life.vercel.app/",
    },
  ];
  return (
    <div id="Portfolio" className="container-fluid py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="section-title">
          Découvrez certains de mes récents projets.
          </h1>
        </div>
        <div className="row">
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
  );
};

export default Portfolio;
