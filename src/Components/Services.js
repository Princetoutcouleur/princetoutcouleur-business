import React from 'react'
import CardServices from './CardServices'
import { FaCode } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";



const Services = () => {
  const CardData = [
    {
      icon: <FaCode/>,
      title: "Développement front-end",
      description:
        "Je conçois et développe des applications Web modernes, réactives et performantes en utilisant les dernières technologies frontend.",
      message: "Bonjour, je veux plus d'information concernant vos services de Développement front-end",
    },
    {
      icon: <BsFillPeopleFill/>,
      title: "Optimisation de réseaux sociaux",
      description:
        "J'aide les particuliers et les entreprises à optimiser leur présence en ligne, à accroître leur portée et à interagir plus efficacement avec leur public cible.",
        message: "Bonjour, je veux plus d'information concernant vos services d'Optimisation de réseaux sociaux"
    },
  ];
  return (
    <div id="Services" className="container-fluid py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="mb-3">Mes Services</h2>
          <p>
            Je propose une gamme de services pour vous aider à atteindre vos
            objectifs en ligne.
          </p>
        </div>
        <div className="row">
          {CardData.map((card) => (
            <div className="col-lg-6 col-md-6 col-sm-12 pb-3">
              <CardServices
                icon={card.icon}
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
