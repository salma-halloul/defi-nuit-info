"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { buildingsData } from "@/app/data/buildings";

export default function CertificatePage() {
  const [userName, setUserName] = useState("");
  const [showCertificate, setShowCertificate] = useState(false);
  const [completedBuildings, setCompletedBuildings] = useState<string[]>([]);
  const certificateRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem("nird-progress");
    if (saved) {
      setCompletedBuildings(JSON.parse(saved));
    }

    const savedName = localStorage.getItem("nird-username");
    if (savedName) {
      setUserName(savedName);
      setShowCertificate(true);
    }
  }, []);

  const isComplete = completedBuildings.length === 6;

  const handleGenerateCertificate = () => {
    if (userName.trim()) {
      localStorage.setItem("nird-username", userName);
      setShowCertificate(true);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  if (!isComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-red-50 to-orange-50 flex items-center justify-center p-4">
        <div className="max-w-2xl bg-white rounded-lg shadow-xl p-8 text-center">
          <div className="text-6xl mb-4">🔒</div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Certificat non disponible
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Tu dois collecter les 6 clés de résistance avant de pouvoir obtenir ton certificat !
          </p>
          <div className="mb-6">
            <p className="font-semibold mb-2">Progression :</p>
            <div className="flex justify-center gap-2">
              {[...Array(6)].map((_, i) => (
                <span key={i} className="text-3xl">
                  {i < completedBuildings.length ? "🔑" : "🔒"}
                </span>
              ))}
            </div>
            <p className="text-gray-600 mt-2">
              {completedBuildings.length}/6 clés collectées
            </p>
          </div>
          <Link
            href="/village"
            className="inline-block px-8 py-3 bg-amber-600 text-white rounded-full font-bold hover:bg-amber-700 transition"
          >
            Retour au village
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-amber-50 to-orange-50 p-4">
      <div className="max-w-5xl mx-auto">
        {!showCertificate ? (
          /* Formulaire pour le nom */
          <div className="bg-white rounded-lg shadow-xl p-8 mt-20">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">🎉</div>
              <h1 className="text-4xl font-bold text-amber-900 mb-4">
                Bravo, Résistant !
              </h1>
              <p className="text-xl text-gray-700">
                Tu as collecté les 6 clés de résistance. Entre ton nom pour obtenir ton certificat officiel !
              </p>
            </div>

            <div className="max-w-md mx-auto">
              <label className="block text-lg font-semibold text-gray-700 mb-2">
                Ton nom complet :
              </label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Ex: Marie Dupont"
                className="w-full px-4 py-3 border-2 border-amber-300 rounded-lg focus:border-amber-500 focus:outline-none text-lg"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleGenerateCertificate();
                  }
                }}
              />
              <button
                onClick={handleGenerateCertificate}
                disabled={!userName.trim()}
                className={`w-full mt-4 px-8 py-4 rounded-lg font-bold text-xl transition ${
                  userName.trim()
                    ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white hover:from-amber-700 hover:to-orange-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                🏆 Générer mon certificat
              </button>
            </div>
          </div>
        ) : (
          /* Certificat */
          <div>
            <div className="mb-6 flex gap-4 justify-center print:hidden">
              <Link
                href="/village"
                className="px-6 py-3 bg-gray-600 text-white rounded-lg font-bold hover:bg-gray-700 transition"
              >
                ← Retour au village
              </Link>
              <button
                onClick={handlePrint}
                className="px-6 py-3 bg-amber-600 text-white rounded-lg font-bold hover:bg-amber-700 transition"
              >
                🖨️ Imprimer le certificat
              </button>
              <button
                onClick={() => {
                  setShowCertificate(false);
                  setUserName("");
                  localStorage.removeItem("nird-username");
                }}
                className="px-6 py-3 bg-orange-600 text-white rounded-lg font-bold hover:bg-orange-700 transition"
              >
                ✏️ Modifier le nom
              </button>
            </div>

            {/* Le certificat */}
            <div 
              ref={certificateRef}
              className="bg-white rounded-lg shadow-2xl p-12 border-8 border-double border-amber-600"
              style={{ 
                backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(251, 191, 36, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(249, 115, 22, 0.1) 0%, transparent 50%)'
              }}
            >
              {/* En-tête */}
              <div className="text-center mb-8 border-b-4 border-amber-400 pb-6">
                <div className="text-6xl mb-4">🛡️</div>
                <h1 className="text-5xl font-bold text-amber-900 mb-2">
                  Certificat de Résistant Numérique
                </h1>
                <p className="text-xl text-amber-700 font-semibold">
                  Démarche NIRD - Numérique Inclusif, Responsable et Durable
                </p>
              </div>

              {/* Corps */}
              <div className="text-center mb-8">
                <p className="text-2xl text-gray-700 mb-6">
                  Ceci certifie que
                </p>
                <p className="text-5xl font-bold text-amber-900 mb-6 py-4 border-y-2 border-amber-400">
                  {userName}
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  a brillamment complété tous les défis du Village Numérique Résistant
                  et démontré une excellente maîtrise des principes d'autonomie numérique,
                  de sobriété et de responsabilité écologique.
                </p>
              </div>

              {/* Les 6 clés obtenues */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-center text-amber-900 mb-4">
                  🔑 Clés de Résistance Obtenues 🔑
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {Object.values(buildingsData).map((building) => (
                    <div 
                      key={building.id}
                      className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-4 border-2 border-amber-400 text-center"
                    >
                      <div className="text-4xl mb-2">{building.icon}</div>
                      <p className="text-sm font-semibold text-gray-800">
                        {building.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compétences acquises */}
              <div className="bg-amber-50 rounded-lg p-6 mb-8 border-2 border-amber-300">
                <h3 className="text-xl font-bold text-amber-900 mb-3 text-center">
                  Compétences acquises
                </h3>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Maîtrise des logiciels libres</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Réparation et lutte contre l'obsolescence</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Pratiques de réemploi numérique</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Connaissance de Linux</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Mutualisation des ressources</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Protection des données personnelles</span>
                  </div>
                </div>
              </div>

              {/* Pied de page avec date et signature */}
              <div className="flex justify-between items-end mt-8 pt-6 border-t-2 border-amber-300">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">Date de délivrance</p>
                  <p className="font-bold text-gray-800">
                    {new Date().toLocaleDateString('fr-FR', { 
                      day: 'numeric', 
                      month: 'long', 
                      year: 'numeric' 
                    })}
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">🏛️</div>
                  <p className="text-sm text-gray-600">Validé par</p>
                  <p className="font-bold text-gray-800">Le Conseil NIRD</p>
                </div>
              </div>

              {/* Devise */}
              <div className="text-center mt-8 pt-6 border-t-2 border-amber-300">
                <p className="text-lg font-semibold text-amber-900 italic">
                  "Par le village, pour le village ! Résistons ensemble à l'empire numérique."
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Inclusion • Responsabilité • Durabilité
                </p>
              </div>
            </div>

            {/* Prochaines étapes */}
            <div className="mt-8 bg-white rounded-lg shadow-xl p-8 print:hidden">
              <h2 className="text-3xl font-bold text-amber-900 mb-4 text-center">
                🎯 Et maintenant ?
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg">
                  <div className="text-4xl mb-3">👥</div>
                  <h3 className="font-bold text-lg mb-2">Rejoins la communauté</h3>
                  <p className="text-sm text-gray-700">
                    Partage ton certificat et échange avec d'autres résistants numériques
                  </p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
                  <div className="text-4xl mb-3">🚀</div>
                  <h3 className="font-bold text-lg mb-2">Passe à l'action</h3>
                  <p className="text-sm text-gray-700">
                    Applique tes nouvelles connaissances dans ton établissement
                  </p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
                  <div className="text-4xl mb-3">📚</div>
                  <h3 className="font-bold text-lg mb-2">Continue d'apprendre</h3>
                  <p className="text-sm text-gray-700">
                    Explore les ressources NIRD pour approfondir tes connaissances
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx global>{`
        @media print {
          body {
            background: white;
          }
          .print\\:hidden {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
