import React, { useState } from "react";
import AccordionItem from "./AccordionItem"; // Importe le composant AccordionItem

const Question = () => {
  // Liste des questions et réponses pour la FAQ
  const faqData = [
    {
      id: 1,
      title:
        "Pourquoi devrais-je investir dans un site internet pour mon entreprise ?",
      content:
        "Un site internet professionnel permet de renforcer la crédibilité de votre entreprise, d’atteindre un plus large public, et de générer des prospects qualifiés. Il constitue également un outil de marketing puissant pour présenter vos produits ou services, communiquer avec vos clients, et améliorer votre visibilité en ligne.",
    },
    {
      id: 2,
      title: "Combien de temps faut-il pour créer un site internet ?",
      content:
        "Nos prestations durent généralement entre 2 et 3 semaines. Le délai peut varier en fonction de votre réactivité à fournir les éléments nécessaires à la création de votre site web.",
    },
    {
      id: 3,
      title: "Quel est le coût de création d’un site internet ?",
      content:
        "Le coût varie en fonction des fonctionnalités et de la complexité du site. Je vous offre un devis personnalisé basés sur vos besoins spécifiques. Je vous fournirai une estimation détaillée après avoir discuté de votre projet et de vos objectifs.",
    },
    {
      id: 4,
      title: "Quels sont les avantages d’un site internet responsive ?",
      content:
        "Un site internet responsive s’adapte à tous les appareils, offrant une expérience utilisateur optimale sur mobile et tablette. Cela permet d’atteindre un plus large public, d’améliorer le référencement de votre site, et de renforcer votre image de marque.",
    },
    {
      id: 5,
      title:
        "Une fois que mon site est terminé, puis-je demander des modifications ?",
      content:
        "Oui, vous pouvez demander des modifications pendant une période de 2 mois après la livraison de votre site.",
    },
    {
      id: 6,
      title: "Le site sera-t-il optimisé pour les moteurs de recherche ?",
      content:
        "Oui, j'optimise tous les sites pour les moteurs de recherche afin d’améliorer leur visibilité en ligne et de générer du trafic organique.",
    },
    {
      id: 7,
      title: "Comment puis-je commencer ?",
      content:
        "Pour commencer, contactez moi pour discuter de votre projet. Je vous poserai quelques questions pour mieux comprendre vos besoins et vos objectifs. Ensuite, je vous enverrai un devis personnalisé basé sur notre discussion.",
    },
  ];

  // State pour gérer l'ouverture des items
  const [openItemId, setOpenItemId] = useState(null);

  // Fonction pour basculer l'état d'ouverture/fermeture
  const toggleItem = (id) => {
    if (openItemId === id) {
      setOpenItemId(null); // Ferme l'item si c'est déjà ouvert
    } else {
      setOpenItemId(id); // Ouvre un nouvel item
    }
  };

  return (
    <div id="Question" className="container-fluid py-5">
      <h1 className="text-center mb-5 section-title" data-aos="zoom-out">Questions fréquentes</h1>
      <div className="accordion container" id="accordionExample">
        {faqData.map((item) => (
          <AccordionItem
            key={item.id}
            id={item.id}
            title={item.title}
            content={item.content}
            isOpen={openItemId === item.id} // Vérifie si l'item est ouvert
            toggle={toggleItem} // Passe la fonction toggle pour chaque item
          />
        ))}
      </div>
    </div>
  );
};

export default Question;
