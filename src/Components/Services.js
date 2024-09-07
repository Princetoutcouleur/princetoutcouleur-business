import React from "react";
import CardServices from "./CardServices";
import { MdDesignServices } from "react-icons/md";
import {
  FaRocket,
  FaSyncAlt,
  FaServer,
  FaMobileAlt,
  FaSearch,
} from "react-icons/fa";
import CardStep from "./CardStep";

const Services = () => {
  const CardOfferData = [
    {
      icon: MdDesignServices,
      title: "Un design moderne et personnalisé",
      description:
        "Attirez l’attention de vos visiteurs avec un design moderne et personnalisé. Votre site sera conçu sur-mesure pour refléter l’identité de votre entreprise et mettre en valeur vos produits ou services.",
    },
    {
      icon: FaRocket,
      title: "Livraison rapide",
      description:
        "Le temps est précieux. Je vous garantis une livraison rapide, pour que vous puissiez rapidement bénéficier de votre nouvelle vitrine en ligne.",
    },
    {
      icon: FaSyncAlt,
      title: "Retours illimités pendant 2 mois",
      description:
        "Votre satisfaction est essentielle. Bénéficiez de retours illimités pendant 2 mois pour peaufiner votre site et obtenir un résultat qui vous convient parfaitement.",
    },
    {
      icon: FaServer,
      title: "Hébergement offert pendant 1 an",
      description:
        "L’hébergement est offert pendant un an, vous permettant de vous concentrer sur votre activité.",
    },
    {
      icon: FaMobileAlt,
      title: "Responsive mobile",
      description:
        "Assurez une expérience optimale à vos visiteurs, quel que soit leur appareil. Votre site sera entièrement responsive, pour une navigation fluide sur mobile, tablette et ordinateur.",
    },
    {
      icon: FaSearch,
      title: "Référencement naturel",
      description:
        "Améliorez votre visibilité en ligne et attirez plus de visiteurs grâce à un site optimisé pour les moteurs de recherche. Votre site sera conçu pour respecter les bonnes pratiques SEO.",
    },
  ];
  const CardStepData = [
    {
      num: "1",
      title: "Rendez-vous",
      description:
        "Prenez rendez-vous avec moi pour discuter de votre activité et de vos besoins. Je vous conseillerai sur la meilleure solution pour votre site web.",
    },
    {
      num: "2",
      title: "Création du site",
      description:
        "Je crée votre site web en fonction de vos besoins et de vos attentes. Vous aurez un site web professionnel et personnalisé.",
    },
    {
      num: "3",
      title: "Suivi pendant 2 mois",
      description:
        "Une fois votre site terminé, je reste à votre disposition pour toute modification ou ajustement pendant 2 mois. Votre satisfaction est ma priorité.",
    },
  ];

  return (
    <div id="Services" className="container-fluid py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="mb-3 section-title">
            La création de <span className="gradient-text">site internet</span>{" "}
            n'a jamais été aussi <span className="gradient-text">simple</span>
          </h1>
        </div>
        <div className="row">
          {CardOfferData.map((card, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12 pb-3">
              <CardServices
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            </div>
          ))}
        </div>
        <div className="text-center my-5">
          <h1 className="mb-3 section-title">
            Je crée votre site internet en{" "}
            <span className="gradient-text">3 étapes</span>
          </h1>
          <p className="fw-bold">
            Votre emploi du temps est chargé et créer un site web professionnel
            peut sembler difficile. C'est pourquoi j'ai simplifié le processus
            pour vous !
          </p>
        </div>
        <div className="row mb-5">
          {CardStepData.map((card, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12 pb-3">
              <CardStep
                num={card.num}
                title={card.title}
                description={card.description}
              />
            </div>
          ))}
        </div>
        <div className="text-center">
          <a href="https://tally.so/r/m6vN5o">
            <button className="btn btn-default border border-dark border-1 yellow px-4 rounded-pill text-white">
              Discutons de votre projet
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
