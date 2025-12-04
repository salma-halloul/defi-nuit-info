"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface Building {
  id: string;
  name: string;
  icon: string;
  description: string;
  color: string;
  position: { x: number; y: number };
}

const buildings: Building[] = [
  {
    id: "forge",
    name: "La Forge des Logiciels Libres",
    icon: "🔨",
    description: "Découvre la puissance des logiciels open source et libère-toi des licences propriétaires",
    color: "red",
    position: { x: 15, y: 20 }
  },
  {
    id: "atelier",
    name: "L'Atelier de Réparation",
    icon: "🔧",
    description: "Répare et prolonge la vie de ton matériel contre l'obsolescence programmée",
    color: "blue",
    position: { x: 70, y: 25 }
  },
  {
    id: "grenier",
    name: "Le Grenier du Réemploi",
    icon: "♻️",
    description: "Donne une seconde vie aux appareils et réduis les déchets électroniques",
    color: "green",
    position: { x: 40, y: 45 }
  },
  {
    id: "bibliotheque",
    name: "La Bibliothèque Linux",
    icon: "🐧",
    description: "Maîtrise Linux et libère-toi de la domination Windows/Mac",
    color: "purple",
    position: { x: 20, y: 65 }
  },
  {
    id: "forge-communs",
    name: "La Forge des Communs",
    icon: "🏛️",
    description: "Mutualise et partage les ressources éducatives libres",
    color: "amber",
    position: { x: 65, y: 70 }
  },
  {
    id: "tour",
    name: "La Tour de Données",
    icon: "🗼",
    description: "Reprends le contrôle de tes données et protège ta vie privée",
    color: "indigo",
    position: { x: 85, y: 50 }
  }
];

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
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2 hover:text-amber-200 transition">
              <span className="text-2xl">🏠</span>
              <span className="font-semibold">Accueil</span>
            </Link>
            
            <h1 className="text-2xl font-bold text-center flex-1">
              🏰 Le Village Numérique Résistant
            </h1>
            
            <div className="flex items-center gap-2">
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
              <span className="text-2xl">🔓</span>
              <span>Bâtiment disponible</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✅</span>
              <span>Défi complété</span>
            </div>
          </div>
        </div>

        {/* La carte interactive du village */}
        <div className="relative bg-gradient-to-br from-green-200 via-emerald-100 to-lime-200 rounded-2xl shadow-2xl p-8 min-h-[600px] border-8 border-amber-700">
          {/* Décoration du village */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="text-6xl absolute top-10 left-10">🌳</div>
            <div className="text-6xl absolute top-20 right-20">🌳</div>
            <div className="text-6xl absolute bottom-20 left-20">🌳</div>
            <div className="text-6xl absolute bottom-10 right-10">🌳</div>
            <div className="text-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">⛰️</div>
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
                  top: `${building.position.y}%` 
                }}
                onMouseEnter={() => setHoveredBuilding(building.id)}
                onMouseLeave={() => setHoveredBuilding(null)}
              >
                {/* Le bâtiment */}
                <div className={`
                  relative bg-white rounded-lg shadow-lg p-4 border-4
                  transition-all duration-300 cursor-pointer
                  ${isCompleted ? 'border-green-500' : 'border-amber-600'}
                  ${isHovered ? 'scale-125 shadow-2xl z-10' : 'scale-100'}
                  hover:scale-125 hover:shadow-2xl hover:z-10
                `}>
                  <div className="text-5xl mb-2 text-center">{building.icon}</div>
                  {isCompleted && (
                    <div className="absolute -top-3 -right-3 text-3xl animate-pulse">
                      ✅
                    </div>
                  )}
                </div>

                {/* Tooltip au survol */}
                {isHovered && (
                  <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 w-64 bg-white rounded-lg shadow-xl p-4 border-2 border-amber-600 z-20">
                    <h3 className="font-bold text-amber-900 mb-2 text-center">
                      {building.name}
                    </h3>
                    <p className="text-sm text-gray-700 text-center">
                      {building.description}
                    </p>
                    <div className="mt-2 text-center">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        isCompleted 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {isCompleted ? '✓ Complété' : '→ Cliquer pour explorer'}
                      </span>
                    </div>
                  </div>
                )}
              </Link>
            );
          })}
        </div>

        {/* Légende */}
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {buildings.map((building) => {
            const isCompleted = completedBuildings.includes(building.id);
            return (
              <div 
                key={building.id}
                className={`bg-white rounded-lg shadow p-4 border-l-4 ${
                  isCompleted ? 'border-green-500 opacity-75' : 'border-amber-500'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{building.icon}</span>
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
    </div>
  );
}
