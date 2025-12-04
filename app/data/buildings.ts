import { Building, QuizQuestion } from "../types";

export const buildingsData: Record<string, Building> = {
  forge: {
    id: "forge",
    name: "La Forge des Logiciels Libres",
    icon: "🔨",
    description: "Dans cette forge ancestrale, nous créons et utilisons des logiciels libres. Ici, pas de licences propriétaires coûteuses ! Le code est ouvert, partagé et amélioré par tous.",
    challenge: "Prouve tes connaissances sur les logiciels libres !",
    color: "red",
    facts: [
      "Un logiciel libre garantit 4 libertés : utiliser, étudier, modifier et redistribuer",
      "Linux, Firefox, LibreOffice sont des exemples de logiciels libres",
      "Les logiciels libres permettent d'économiser des milliers d'euros en licences",
      "Le code source ouvert améliore la sécurité et la transparence"
    ]
  },
  atelier: {
    id: "atelier",
    name: "L'Atelier de Réparation",
    icon: "🔧",
    description: "Ici, nous réparons au lieu de jeter ! L'obsolescence programmée ne passera pas par nous. Chaque appareil mérite une seconde chance.",
    challenge: "Démontre tes compétences en réparation !",
    color: "blue",
    facts: [
      "70% des pannes sont réparables avec les bons outils et connaissances",
      "Réparer un appareil réduit son empreinte carbone de 80%",
      "Le droit à la réparation est maintenant inscrit dans la loi européenne",
      "Un smartphone réparé peut durer 5 ans de plus"
    ]
  },
  grenier: {
    id: "grenier",
    name: "Le Grenier du Réemploi",
    icon: "♻️",
    description: "Dans ce grenier magique, les vieux appareils retrouvent une nouvelle vie. Le réemploi est la clé d'un numérique durable !",
    challenge: "Maîtrise l'art du réemploi numérique !",
    color: "green",
    facts: [
      "Réemployer un ordinateur évite l'émission de 200kg de CO2",
      "80% de l'impact environnemental d'un appareil vient de sa fabrication",
      "Un ordinateur reconditionné consomme 10 fois moins de ressources",
      "Le marché du reconditionné permet d'économiser 30 à 70% du prix neuf"
    ]
  },
  bibliotheque: {
    id: "bibliotheque",
    name: "La Bibliothèque Linux",
    icon: "🐧",
    description: "Dans cette bibliothèque, le manchot Tux règne en maître ! Linux est notre arme contre l'obsolescence et la dépendance aux systèmes propriétaires.",
    challenge: "Montre que tu connais Linux !",
    color: "purple",
    facts: [
      "Linux peut faire fonctionner un ordinateur de 15 ans comme neuf",
      "Linux est gratuit, sécurisé et ne collecte pas tes données",
      "90% des serveurs web tournent sous Linux",
      "Linux Ubuntu, Mint ou Debian sont faciles pour débuter"
    ]
  },
  "forge-communs": {
    id: "forge-communs",
    name: "La Forge des Communs",
    icon: "🏛️",
    description: "Cette forge spéciale mutualise les ressources éducatives. Partager c'est multiplier ! Ensemble, nous créons un patrimoine numérique commun.",
    challenge: "Comprends la puissance du partage !",
    color: "amber",
    facts: [
      "Les ressources libres sont réutilisables et adaptables par tous",
      "Mutualiser permet d'économiser 70% des coûts de développement",
      "La Forge des communs numériques héberge des centaines de projets",
      "Partager améliore la qualité grâce aux contributions collectives"
    ]
  },
  tour: {
    id: "tour",
    name: "La Tour de Données",
    icon: "🗼",
    description: "Du haut de cette tour, nous surveillons nos données ! Ici, tu apprends à protéger ta vie privée et à reprendre le contrôle de tes informations.",
    challenge: "Deviens gardien de tes données !",
    color: "indigo",
    facts: [
      "Tes données personnelles valent de l'or pour les géants du web",
      "Le RGPD te donne le droit de contrôler tes données",
      "Les clouds auto-hébergés protègent ta vie privée",
      "Chiffrer ses données les rend illisibles pour les curieux"
    ]
  }
};

export const quizQuestions: Record<string, QuizQuestion[]> = {
  forge: [
    {
      question: "Quelle est la différence principale entre un logiciel libre et un logiciel propriétaire ?",
      options: [
        "Le logiciel libre est gratuit, le propriétaire est payant",
        "Le logiciel libre donne accès au code source, le propriétaire non",
        "Le logiciel libre est moins performant",
        "Il n'y a pas de différence"
      ],
      correctAnswer: 1,
      explanation: "Un logiciel libre donne accès à son code source et permet de le modifier, contrairement au logiciel propriétaire. Il peut être gratuit ou payant !"
    },
    {
      question: "Lequel de ces logiciels est un logiciel libre ?",
      options: [
        "Microsoft Word",
        "Adobe Photoshop",
        "LibreOffice",
        "Windows 11"
      ],
      correctAnswer: 2,
      explanation: "LibreOffice est un logiciel libre et gratuit, alternative à Microsoft Office. Il respecte les 4 libertés fondamentales du logiciel libre."
    },
    {
      question: "Combien de libertés fondamentales garantit un logiciel libre ?",
      options: [
        "2 libertés",
        "3 libertés",
        "4 libertés",
        "5 libertés"
      ],
      correctAnswer: 2,
      explanation: "Les 4 libertés sont : utiliser, étudier, modifier et redistribuer le logiciel. C'est la base de la philosophie du logiciel libre !"
    }
  ],
  atelier: [
    {
      question: "Quel pourcentage des pannes électroniques sont réparables ?",
      options: [
        "30%",
        "50%",
        "70%",
        "90%"
      ],
      correctAnswer: 2,
      explanation: "70% des pannes sont réparables avec les bons outils et connaissances. Ne jetez plus, réparez !"
    },
    {
      question: "Qu'est-ce que l'obsolescence programmée ?",
      options: [
        "Un programme informatique obsolète",
        "Une technique pour rendre un produit rapidement inutilisable",
        "Un calendrier de maintenance",
        "Une fonctionnalité de mise à jour"
      ],
      correctAnswer: 1,
      explanation: "L'obsolescence programmée est une stratégie pour limiter volontairement la durée de vie d'un produit afin d'en vendre plus. C'est contre cette pratique que nous luttons !"
    },
    {
      question: "Quel est l'avantage principal de réparer plutôt que de racheter ?",
      options: [
        "C'est plus rapide",
        "C'est plus moderne",
        "Ça réduit l'empreinte carbone de 80%",
        "Ça améliore les performances"
      ],
      correctAnswer: 2,
      explanation: "Réparer un appareil réduit son empreinte carbone de 80% ! C'est bon pour la planète et le porte-monnaie."
    }
  ],
  grenier: [
    {
      question: "Quelle quantité de CO2 évite-t-on en réemployant un ordinateur ?",
      options: [
        "20 kg",
        "50 kg",
        "200 kg",
        "500 kg"
      ],
      correctAnswer: 2,
      explanation: "Réemployer un ordinateur évite l'émission de 200kg de CO2, soit l'équivalent d'un trajet Paris-Marseille en voiture !"
    },
    {
      question: "Quelle partie de l'impact environnemental d'un appareil vient de sa fabrication ?",
      options: [
        "20%",
        "40%",
        "60%",
        "80%"
      ],
      correctAnswer: 3,
      explanation: "80% de l'impact environnemental vient de la fabrication ! C'est pourquoi prolonger la durée de vie est si important."
    },
    {
      question: "Qu'est-ce qu'un appareil reconditionné ?",
      options: [
        "Un appareil neuf en promotion",
        "Un appareil d'occasion remis en état",
        "Un appareil cassé",
        "Un appareil de collection"
      ],
      correctAnswer: 1,
      explanation: "Un appareil reconditionné a été testé, réparé et remis en état pour être revendu. C'est une excellente alternative au neuf !"
    }
  ],
  bibliotheque: [
    {
      question: "Pourquoi Linux permet-il de faire fonctionner de vieux ordinateurs ?",
      options: [
        "Il est magique",
        "Il consomme moins de ressources système",
        "Il accélère le processeur",
        "Il ne le permet pas"
      ],
      correctAnswer: 1,
      explanation: "Linux est beaucoup plus léger que Windows ou macOS, ce qui permet de faire tourner de vieux ordinateurs de manière fluide !"
    },
    {
      question: "Quel est le mascotte officiel de Linux ?",
      options: [
        "Un renard",
        "Un manchot (Tux)",
        "Un tigre",
        "Un aigle"
      ],
      correctAnswer: 1,
      explanation: "Tux le manchot est la mascotte de Linux depuis 1996. Il symbolise la liberté et l'ouverture du système !"
    },
    {
      question: "Linux est-il gratuit ?",
      options: [
        "Non, il coûte 100€",
        "Oui, totalement gratuit",
        "Gratuit pour les étudiants seulement",
        "Payant après 1 an"
      ],
      correctAnswer: 1,
      explanation: "Linux est totalement gratuit et le restera toujours ! C'est l'un des principes fondamentaux du logiciel libre."
    }
  ],
  "forge-communs": [
    {
      question: "Que signifie 'mutualiser' des ressources ?",
      options: [
        "Les vendre au meilleur prix",
        "Les partager et les utiliser collectivement",
        "Les garder pour soi",
        "Les détruire après usage"
      ],
      correctAnswer: 1,
      explanation: "Mutualiser signifie mettre en commun et partager des ressources. Ensemble, on va plus loin !"
    },
    {
      question: "Quel est l'avantage principal de la mutualisation ?",
      options: [
        "Ça coûte plus cher",
        "Ça permet d'économiser 70% des coûts",
        "Ça complique tout",
        "Il n'y a pas d'avantage"
      ],
      correctAnswer: 1,
      explanation: "La mutualisation permet d'économiser environ 70% des coûts de développement. Pourquoi réinventer la roue ?"
    },
    {
      question: "Qu'est-ce qu'une ressource éducative libre ?",
      options: [
        "Un cours qui coûte cher",
        "Un contenu réutilisable et modifiable par tous",
        "Un livre ancien",
        "Un site web privé"
      ],
      correctAnswer: 1,
      explanation: "Une ressource éducative libre peut être utilisée, modifiée et partagée librement. C'est le savoir en partage !"
    }
  ],
  tour: [
    {
      question: "Que protège le RGPD ?",
      options: [
        "Les ordinateurs",
        "Les données personnelles",
        "Les logiciels",
        "Les réseaux sociaux"
      ],
      correctAnswer: 1,
      explanation: "Le RGPD (Règlement Général sur la Protection des Données) protège vos données personnelles et vous donne le contrôle sur leur utilisation !"
    },
    {
      question: "Pourquoi les géants du web veulent-ils nos données ?",
      options: [
        "Pour les détruire",
        "Pour nous aider gratuitement",
        "Pour les monétiser et cibler la publicité",
        "Ils n'en veulent pas"
      ],
      correctAnswer: 2,
      explanation: "Vos données valent de l'or ! Elles permettent de cibler la publicité et de comprendre vos comportements pour vendre plus."
    },
    {
      question: "Qu'est-ce qu'un cloud auto-hébergé ?",
      options: [
        "Un nuage dans le ciel",
        "Un serveur de stockage que tu contrôles",
        "Un service Google",
        "Un réseau social"
      ],
      correctAnswer: 1,
      explanation: "Un cloud auto-hébergé (comme Nextcloud) vous permet de stocker vos données sur votre propre serveur, sans passer par Google ou Microsoft !"
    }
  ]
};
