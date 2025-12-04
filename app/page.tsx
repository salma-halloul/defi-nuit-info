"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-yellow-50">
      {/* En-tête */}
      <header className="bg-amber-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center mb-4">
            <div></div>
            <h1 className="text-3xl font-bold text-center flex-1">🛡️ Le Village Numérique Résistant 🛡️</h1>
            <Link href="/about" className="hover:text-amber-200 transition font-semibold">
              ℹ️ À propos
            </Link>
          </div>
          <p className="text-center text-amber-100">Démarche NIRD - Numérique Inclusif, Responsable et Durable</p>
        </div>
      </header>

      {/* Contenu principal */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Section d'introduction */}
        <div className={`text-center mb-16 transition-all duration-1000 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-lg shadow-xl p-8 border-4 border-amber-600">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">
              Bienvenue dans le Village Gaulois de l'Autonomie Numérique !
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Face à l'invasion des géants du numérique, notre établissement scolaire s'est transformé 
              en un village gaulois résistant ! Ici, nous luttons contre l'obsolescence programmée, 
              la dépendance aux licences coûteuses et la perte de contrôle de nos données.
            </p>
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 mb-6">
              <p className="text-amber-900 font-semibold">
                ⚡ Ta mission : Explorer les 6 bâtiments du village, relever les défis et collecter 
                les clés de résistance pour obtenir ton certificat de Résistant Numérique !
              </p>
            </div>
          </div>
        </div>

        {/* Les 3 piliers */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { title: "🤝 Inclusion", desc: "Un numérique accessible à tous", color: "blue" },
            { title: "🌱 Responsabilité", desc: "Des pratiques éthiques et transparentes", color: "green" },
            { title: "♻️ Durabilité", desc: "Réduire l'impact environnemental", color: "emerald" }
          ].map((pillar, i) => (
            <div 
              key={i}
              className={`bg-white rounded-lg shadow-lg p-6 border-t-4 border-${pillar.color}-500 transition-all duration-500 hover:scale-105 hover:shadow-xl`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <h3 className="text-2xl font-bold mb-2 text-gray-800">{pillar.title}</h3>
              <p className="text-gray-600">{pillar.desc}</p>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center">
          <Link 
            href="/village"
            className="inline-block bg-gradient-to-r from-amber-600 to-orange-600 text-white px-12 py-4 rounded-full text-xl font-bold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:from-amber-700 hover:to-orange-700"
          >
            🏰 Entrer dans le Village 🏰
          </Link>
          <p className="mt-4 text-gray-600">Commence ton aventure vers l'autonomie numérique !</p>
        </div>

        {/* Section informative */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-amber-900 mb-4">🎯 Qu'est-ce que la démarche NIRD ?</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-lg text-gray-800 mb-2">Nos actions :</h4>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Sensibiliser à la sobriété numérique</li>
                <li>✓ Encourager le réemploi du matériel</li>
                <li>✓ Promouvoir Linux contre l'obsolescence</li>
                <li>✓ Mutualiser les ressources libres</li>
                <li>✓ Accompagner la transition écoresponsable</li>
                <li>✓ Co-construire des solutions locales</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg text-gray-800 mb-2">🎮 Dans ce jeu :</h4>
              <ul className="space-y-2 text-gray-700">
                <li>🏗️ Explore 6 bâtiments thématiques</li>
                <li>🎯 Relève des défis pratiques</li>
                <li>🔑 Collecte 6 clés de résistance</li>
                <li>🏆 Obtiens ton certificat final</li>
                <li>👥 Rejoins la communauté NIRD</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-amber-900 text-white mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-amber-100">
            Par le village, pour le village ! Résistons ensemble à l'empire numérique.
          </p>
          <p className="text-sm text-amber-200 mt-2">
            © {new Date().getFullYear()} Démarche NIRD - Tous droits libérés
          </p>
        </div>
      </footer>
    </div>
  );
}
