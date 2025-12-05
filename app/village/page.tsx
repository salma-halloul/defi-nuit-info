"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface Building {
  id: string;
  name: string;
  icon: string;
  description: string;
  color: string;
  position: { x: number; y: number };
  type: 'forge' | 'atelier' | 'grenier' | 'bibliotheque' | 'forge-communs' | 'tour';
  houseImage: string;
}

const buildings: Building[] = [
  {
    id: "forge",
    name: "La Forge des Logiciels Libres",
    icon: "🔨",
    description: "Découvre la puissance des logiciels open source et libère-toi des licences propriétaires",
    color: "red",
    position: { x: 20, y: 25 },
    type: 'forge',
    houseImage: '/house1.svg'
  },
  {
    id: "atelier",
    name: "L'Atelier de Réparation",
    icon: "🔧",
    description: "Répare et prolonge la vie de ton matériel contre l'obsolescence programmée",
    color: "blue",
    position: { x: 70, y: 25 },
    type: 'atelier',
    houseImage: '/house2.svg'
  },
  {
    id: "grenier",
    name: "Le Grenier du Réemploi",
    icon: "♻️",
    description: "Donne une seconde vie aux appareils et réduis les déchets électroniques",
    color: "green",
    position: { x: 40, y: 45 },
    type: 'grenier',
    houseImage: '/house3.svg'
  },
  {
    id: "bibliotheque",
    name: "La Bibliothèque Linux",
    icon: "🐧",
    description: "Maîtrise Linux et libère-toi de la domination Windows/Mac",
    color: "purple",
    position: { x: 20, y: 65 },
    type: 'bibliotheque',
    houseImage: '/house4.svg'
  },
  {
    id: "forge-communs",
    name: "La Forge des Communs",
    icon: "🏛️",
    description: "Mutualise et partage les ressources éducatives libres",
    color: "amber",
    position: { x: 65, y: 70 },
    type: 'forge-communs',
    houseImage: '/house5.svg'
  },
  {
    id: "tour",
    name: "La Tour de Données",
    icon: "🗼",
    description: "Reprends le contrôle de tes données et protège ta vie privée",
    color: "indigo",
    position: { x: 85, y: 50 },
    type: 'tour',
    houseImage: '/house6.svg'
  }
];

// Composant pour afficher les maisons SVG
const BuildingIcon = ({ houseImage, isCompleted }: { houseImage: string; isCompleted: boolean }) => {
  return (
    <div className={`building-svg-container ${isCompleted ? 'completed' : ''}`}>
      <Image 
        src={houseImage} 
        alt="House" 
        width={180} 
        height={180}
        className="building-svg"
        priority
      />
    </div>
  );
};

export default function VillagePage() {
  const [completedBuildings, setCompletedBuildings] = useState<string[]>([]);
  const [hoveredBuilding, setHoveredBuilding] = useState<string | null>(null);

  useEffect(() => {
    // Charger la progression depuis localStorage
    const saved = localStorage.getItem("nird-progress");
    if (saved) {
      setCompletedBuildings(JSON.parse(saved));
    }
  }, []);

  const keysCollected = completedBuildings.length;
  const isVillageComplete = keysCollected === 6;

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 via-emerald-50 to-lime-50">
      {/* Header avec progression */}
      <header className="bg-amber-900 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center md:mb-0 mb-3">
            <Link href="/" className="flex items-center gap-2 hover:text-amber-200 transition">
              <span className="md:text-2xl text-lg">🏠</span>
              <span className="font-semibold md:text-lg text-sm">Accueil</span>
            </Link>
            
            <h1 className="text-2xl font-bold md:text-lg text-sm text-center flex-1">
              🏰 Le Village Numérique Résistant
            </h1>
            
            <div className="md:flex hidden items-center gap-2">
              <span className="font-semibold">Clés : {keysCollected}/6</span>
              <div className="flex gap-1">
                {[...Array(6)].map((_, i) => (
                  <span key={i} className="text-xl">
                    {i < keysCollected ? "🔑" : "🔒"}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Affichage des clés en mobile (en dessous du titre) */}
          <div className="md:hidden flex items-center justify-center gap-2 mb-3">
            <span className="font-semibold text-sm">Clés : {keysCollected}/6</span>
            <div className="flex gap-1">
              {[...Array(6)].map((_, i) => (
                <span key={i} className="text-lg">
                  {i < keysCollected ? "🔑" : "🔒"}
                </span>
              ))}
            </div>
          </div>
          
          {/* Barre de progression */}
          <div className="mt-3 bg-amber-800 rounded-full h-3 overflow-hidden">
            <div 
              className="bg-yellow-400 h-full transition-all duration-500 rounded-full"
              style={{ width: `${(keysCollected / 6) * 100}%` }}
            />
          </div>
        </div>
      </header>

      {/* Carte du village */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Message de victoire */}
        {isVillageComplete && (
          <div className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 text-white rounded-lg shadow-2xl p-8 mb-8 text-center animate-bounce">
            <h2 className="text-4xl font-bold mb-4">🎉 Félicitations, Résistant ! 🎉</h2>
            <p className="text-xl mb-4">
              Tu as collecté les 6 clés de résistance ! Le village est fier de toi !
            </p>
            <Link 
              href="/certificat"
              className="inline-block bg-white text-amber-900 px-8 py-3 rounded-full font-bold text-lg hover:bg-amber-100 transition"
            >
              🏆 Obtenir ton Certificat 🏆
            </Link>
          </div>
        )}

        {/* Instructions */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-amber-900 mb-3">
            📜 Ton aventure dans le village
          </h2>
          <p className="text-gray-700 mb-4">
            Explore les 6 bâtiments du village en cliquant dessus. Dans chaque bâtiment, 
            tu devras relever un défi pour obtenir une clé de résistance. Une fois les 6 clés 
            collectées, tu pourras obtenir ton certificat de Résistant Numérique !
          </p>
          <div className="flex gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-amber-900 border-2 border-amber-700 rounded"></div>
              <span>Bâtiment disponible</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-green-600 border-2 border-green-700 rounded"></div>
              <span>Défi complété</span>
            </div>
          </div>
        </div>

        {/* La carte interactive du village */}
        <div className="relative rounded-2xl shadow-2xl p-8 min-h-[500px] md:min-h-[700px] min-h-[500px] border-8 md:border-8 border-4 border-amber-900 overflow-hidden md:p-8 p-4"
          style={{
            background: 'linear-gradient(to bottom, #87ceeb 0%, #a8d5ba 40%, #90c695 100%)',
            backgroundImage: `
              radial-gradient(circle at 30% 40%, rgba(139, 195, 74, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 70% 60%, rgba(139, 195, 74, 0.3) 0%, transparent 50%)
            `
          }}>
          
          {/* Palissade autour du village */}
          <div className="palissade-top"></div>
          <div className="palissade-bottom"></div>
          <div className="palissade-left"></div>
          <div className="palissade-right"></div>

          {/* Décorations gauloises éparpillées au milieu */}
          <div className="absolute top-1/4 left-1/3 chene" style={{ zIndex: 2 }}></div>
          <div className="absolute bottom-1/2 left-1/2 arbre-gaulois" style={{ zIndex: 2 }}></div>
          <div className="absolute top-1/2 right-1/3 arbre-gaulois" style={{ zIndex: 2 }}></div>
          <div className="absolute bottom-1/4 left-2/4 arbre-gaulois" style={{ zIndex: 2 }}></div>
          <div className="absolute top-3/5 right-2/5 bush" style={{ zIndex: 2 }}></div>
          <div className="absolute bottom-3/5 left-3/5 bush" style={{ zIndex: 2 }}></div>
          <div className="absolute top-2/3 left-1/3 bush" style={{ zIndex: 2 }}></div>
          
          {/* Feu de camp au centre */}
          <div className="absolute" style={{ left: '48%', top: '55%', zIndex: 5 }}>
            <div className="feu-camp">
              <div className="flamme"></div>
              <div className="flamme flamme2"></div>
              <div className="flamme flamme3"></div>
              <div className="bois"></div>
            </div>
          </div>

          {/* Les bâtiments */}
          {buildings.map((building) => {
            const isCompleted = completedBuildings.includes(building.id);
            const isHovered = hoveredBuilding === building.id;
            
            return (
              <Link
                key={building.id}
                href={`/building/${building.id}`}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                style={{ 
                  left: `${building.position.x}%`, 
                  top: `${building.position.y}%`,
                  zIndex: isHovered ? 9999 : 10
                }}
                onMouseEnter={() => setHoveredBuilding(building.id)}
                onMouseLeave={() => setHoveredBuilding(null)}
              >
                {/* Le bâtiment */}
                <div className={`
                  relative transition-all duration-300 cursor-pointer
                  ${isHovered ? 'scale-110 z-20' : 'scale-100'}
                  hover:scale-110 hover:z-20
                  ${isCompleted ? 'completed-building' : 'floating-building'}
                `}>
                  <BuildingIcon houseImage={building.houseImage} isCompleted={isCompleted} />
                  {isCompleted && (
                    <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 bg-green-500 rounded-full p-2 md:p-2 p-1 border-2 md:border-2 border border-white shadow-lg animate-pulse">
                      <span className="text-white text-xl md:text-xl text-xs font-bold">✓</span>
                    </div>
                  )}
                </div>

                {/* Tooltip au survol */}
                {isHovered && (
                  <div className="absolute top-full mt-[-29px] left-1/2 transform -translate-x-1/2 w-64 bg-white rounded-lg shadow-2xl p-4 border-4 border-amber-600 z-[100]">
                    <h3 className="font-bold text-amber-900 mb-2 text-center text-md">
                      {building.name}
                    </h3>
                    <p className="text-xs text-gray-700 text-center mb-3">
                      {building.description}
                    </p>
                    <div className="text-center">
                      <span className={`inline-block px-4 py-2 rounded-full text-xs font-semibold ${
                        isCompleted 
                          ? 'bg-green-100 text-green-800 border-2 border-green-600' 
                          : 'bg-amber-100 text-amber-800 border-2 border-amber-600'
                      }`}>
                        {isCompleted ? '✓ Clé obtenue' : '→ Cliquer pour explorer'}
                      </span>
                    </div>
                  </div>
                )}
              </Link>
            );
          })}
        </div>

        {/* Légende */}
        <div className="mt-8 grid md:grid-cols-3 gap-2">
          {buildings.map((building) => {
            const isCompleted = completedBuildings.includes(building.id);
            return (
              <div 
                key={building.id}
                className={`bg-white rounded-lg shadow-lg border-l-4 transition-all hover:shadow-xl ${
                  isCompleted ? 'border-green-500' : 'border-amber-600'
                }`}
              >
                <div className="flex items-center">
                  <div className="scale-65">
                    <BuildingIcon houseImage={building.houseImage} isCompleted={isCompleted} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 text-sm">
                      {building.name}
                    </h3>
                    {isCompleted && (
                      <span className="text-xs text-green-600 font-semibold">
                        ✓ Clé obtenue
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* Styles CSS pour le village */}
      <style jsx global>{`
        /* Conteneur des maisons SVG */
        .building-svg-container {
          position: relative;
          filter: drop-shadow(0 6px 8px rgba(0, 0, 0, 0.4));
          transition: all 0.3s ease;
        }

        .building-svg-container.completed {
          filter: drop-shadow(0 0 20px rgba(16, 185, 129, 0.8)) drop-shadow(0 6px 8px rgba(0, 0, 0, 0.4));
        }

        .building-svg {
          width: 180px;
          height: 180px;
          object-fit: contain;
        }

        /* Responsive: rétrécir les images sur mobile */
        @media (max-width: 768px) {
          .building-svg {
            width: 100px;
            height: 100px;
          }
        }

        @media (max-width: 480px) {
          .building-svg {
            width: 80px;
            height: 80px;
          }
        }

        /* Palissade */
        .palissade-top, .palissade-bottom, .palissade-left, .palissade-right {
          position: absolute;
          background: repeating-linear-gradient(
            90deg,
            #8b6f47 0px,
            #8b6f47 8px,
            #654321 8px,
            #654321 10px,
            #8b6f47 10px,
            #8b6f47 18px,
            #3e2723 18px,
            #3e2723 20px
          );
          border: 2px solid #3e2723;
          z-index: 1;
        }
        .palissade-top {
          top: 0;
          left: 0;
          right: 0;
          height: 30px;
          clip-path: polygon(
            0 0, 5% 0, 5% 60%, 10% 100%, 15% 60%, 15% 0,
            20% 0, 20% 60%, 25% 100%, 30% 60%, 30% 0,
            35% 0, 35% 60%, 40% 100%, 45% 60%, 45% 0,
            50% 0, 50% 60%, 55% 100%, 60% 60%, 60% 0,
            65% 0, 65% 60%, 70% 100%, 75% 60%, 75% 0,
            80% 0, 80% 60%, 85% 100%, 90% 60%, 90% 0,
            95% 0, 95% 60%, 100% 100%, 100% 0
          );
        }
        .palissade-bottom {
          bottom: 0;
          left: 0;
          right: 0;
          height: 30px;
          clip-path: polygon(
            0 100%, 5% 100%, 5% 40%, 10% 0, 15% 40%, 15% 100%,
            20% 100%, 20% 40%, 25% 0, 30% 40%, 30% 100%,
            35% 100%, 35% 40%, 40% 0, 45% 40%, 45% 100%,
            50% 100%, 50% 40%, 55% 0, 60% 40%, 60% 100%,
            65% 100%, 65% 40%, 70% 0, 75% 40%, 75% 100%,
            80% 100%, 80% 40%, 85% 0, 90% 40%, 90% 100%,
            95% 100%, 95% 40%, 100% 0, 100% 100%
          );
        }
        .palissade-left {
          top: 30px;
          bottom: 30px;
          left: 0;
          width: 25px;
          background: repeating-linear-gradient(
            0deg,
            #8b6f47 0px,
            #8b6f47 8px,
            #654321 8px,
            #654321 10px,
            #8b6f47 10px,
            #8b6f47 18px,
            #3e2723 18px,
            #3e2723 20px
          );
        }
        .palissade-right {
          top: 30px;
          bottom: 30px;
          right: 0;
          width: 25px;
          background: repeating-linear-gradient(
            0deg,
            #8b6f47 0px,
            #8b6f47 8px,
            #654321 8px,
            #654321 10px,
            #8b6f47 10px,
            #8b6f47 18px,
            #3e2723 18px,
            #3e2723 20px
          );
        }

        /* Chênes */
        .chene {
          width: 70px;
          height: 90px;
          position: relative;
        }
        .chene::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 27px;
          width: 16px;
          height: 40px;
          background: #5d4037;
          border: 3px solid #3e2723;
          border-radius: 4px;
        }
        .chene::after {
          content: '';
          position: absolute;
          top: 0;
          left: 10px;
          width: 50px;
          height: 50px;
          background: #2d5016;
          border-radius: 50%;
          border: 3px solid #1b3409;
          box-shadow: 
            -15px 10px 0 -5px #2d5016,
            15px 10px 0 -5px #2d5016,
            0 -10px 0 -5px #2d5016;
        }

        /* Arbres gaulois */
        .arbre-gaulois {
          width: 55px;
          height: 75px;
          position: relative;
        }
        .arbre-gaulois::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 20px;
          width: 14px;
          height: 32px;
          background: #5d4037;
          border: 2px solid #3e2723;
          border-radius: 3px;
        }
        .arbre-gaulois::after {
          content: '';
          position: absolute;
          top: 5px;
          left: 7px;
          width: 40px;
          height: 40px;
          background: #388e3c;
          border-radius: 50%;
          border: 3px solid #1b5e20;
        }

        /* Rochers */
        .rocher {
          width: 50px;
          height: 35px;
          background: #9e9e9e;
          border-radius: 50% 50% 40% 40%;
          border: 3px solid #616161;
          position: relative;
        }
        .rocher::before {
          content: '';
          width: 30px;
          height: 22px;
          background: #bdbdbd;
          border-radius: 50%;
          position: absolute;
          top: -8px;
          left: 5px;
          border: 2px solid #757575;
        }
        .rocher::after {
          content: '';
          width: 20px;
          height: 15px;
          background: #757575;
          border-radius: 50%;
          position: absolute;
          top: 5px;
          right: 5px;
          border: 2px solid #616161;
        }

        /* Buissons */
        .bush {
          width: 40px;
          height: 25px;
          background: #16a34a;
          border-radius: 50%;
          border: 2px solid #14532d;
          position: relative;
        }
        .bush::before {
          content: '';
          position: absolute;
          top: -8px;
          left: 10px;
          width: 20px;
          height: 20px;
          background: #22c55e;
          border-radius: 50%;
          border: 2px solid #14532d;
        }

        /* Feu de camp */
        .feu-camp {
          width: 60px;
          height: 60px;
          position: relative;
        }
        .feu-camp .bois {
          position: absolute;
          bottom: 0;
          left: 10px;
          width: 40px;
          height: 8px;
          background: #5d4037;
          border-radius: 2px;
        }
        .feu-camp .bois::before {
          content: '';
          position: absolute;
          bottom: 4px;
          left: -5px;
          width: 35px;
          height: 6px;
          background: #5d4037;
          border-radius: 2px;
          transform: rotate(-20deg);
        }
        .feu-camp .bois::after {
          content: '';
          position: absolute;
          bottom: 4px;
          right: -5px;
          width: 35px;
          height: 6px;
          background: #5d4037;
          border-radius: 2px;
          transform: rotate(20deg);
        }
        .feu-camp .flamme {
          position: absolute;
          bottom: 8px;
          left: 20px;
          width: 20px;
          height: 35px;
          background: linear-gradient(to top, #ff6b35, #f7931e, #ffd93d);
          border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
          animation: flamme-dance 1s ease-in-out infinite;
        }
        .feu-camp .flamme2 {
          left: 15px;
          height: 30px;
          animation-delay: 0.3s;
        }
        .feu-camp .flamme3 {
          left: 25px;
          height: 32px;
          animation-delay: 0.6s;
        }
        @keyframes flamme-dance {
          0%, 100% {
            transform: scaleY(1) translateY(0);
          }
          50% {
            transform: scaleY(1.1) translateY(-5px);
          }
        }

        /* Animation pour les bâtiments complétés */
        .completed-building {
          animation: glow-gaulois 2s ease-in-out infinite;
        }
        @keyframes glow-gaulois {
          0%, 100% {
            filter: drop-shadow(0 6px 8px rgba(0, 0, 0, 0.4));
          }
          50% {
            filter: drop-shadow(0 0 25px rgba(16, 185, 129, 0.9)) drop-shadow(0 6px 8px rgba(0, 0, 0, 0.4));
          }
        }

        /* Animation de flottement pour les bâtiments non complétés */
        .floating-building {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        /* Responsive pour arbres, rochers, buissons et feu sur mobile */
        @media (max-width: 768px) {
          .chene {
            width: 45px;
            height: 60px;
            transform: scale(0.65);
          }
          .arbre-gaulois {
            width: 35px;
            height: 50px;
            transform: scale(0.65);
          }
          .rocher {
            width: 35px;
            height: 25px;
            transform: scale(0.7);
          }
          .bush {
            width: 30px;
            height: 18px;
            transform: scale(0.75);
          }
          .feu-camp {
            width: 40px;
            height: 40px;
            transform: scale(0.65);
          }
        }

        @media (max-width: 480px) {
          .chene {
            width: 35px;
            height: 45px;
            transform: scale(0.5);
          }
          .arbre-gaulois {
            width: 28px;
            height: 38px;
            transform: scale(0.5);
          }
          .rocher {
            width: 25px;
            height: 18px;
            transform: scale(0.5);
          }
          .bush {
            width: 20px;
            height: 13px;
            transform: scale(0.5);
          }
          .feu-camp {
            width: 30px;
            height: 30px;
            transform: scale(0.5);
          }
        }
      `}</style>
    </div>
  );
}
