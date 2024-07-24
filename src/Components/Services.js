import React from 'react'
import CardServices from './CardServices'
import icondev from '../Asset/dev icon services.png'
import iconMarketing from '../Asset/boost icon services.png'
import iconlanding from '../Asset/landing icon.png'



const Services = () => {
  const CardData = [
    {
      img: icondev,
      title: "Création de Sites Vitrines",
      description:
        "Présentez votre entreprise, vos produits ou vos services de manière professionnelle et attrayante avec un site vitrine conçu pour captiver et engager vos visiteurs.",
      message: "Bonjour, je veux plus d'information concernant vos services de Création de Sites Vitrines",
    },
    {
      img: iconMarketing,
      title: "Optimisation de la Présence en Ligne",
      description:
        "Améliorez votre visibilité et votre impact en ligne grâce à des stratégies personnalisées et efficaces.",
        message: "Bonjour, je veux plus d'information concernant vos services d'Optimisation de la Présence en Ligne"
    },
    {
      img: iconlanding,
      title: "Développement de Landing Pages",
      description:
        "Maximisez vos conversions avec des pages de destination optimisées pour générer des leads et augmenter vos ventes.",
      message: "Bonjour, je veux plus d'information concernant vos services de Développement de Landing Pages",
    },
  ];
  return (
    <div id="Services" className="container-fluid py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="mb-3">Nos Services</h2>
          <p>
            On propose une gamme de services pour vous aider à atteindre vos
            objectifs en ligne.
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
  )
}

export default Services
