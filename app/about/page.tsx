"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-cyan-50 to-teal-50">
      {/* Header */}
      <header className="bg-amber-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-amber-200 transition">
              ← Accueil
            </Link>
            <h1 className="text-3xl font-bold text-center flex-1">
              À propos de la démarche NIRD
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-xl p-8 mb-8 border-4 border-amber-600">
          <div className="text-center mb-6">
            <div className="text-6xl mb-4">🛡️</div>
            <h2 className="text-4xl font-bold text-amber-900 mb-4">
              NIRD : Numérique Inclusif, Responsable et Durable
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Une démarche collective pour un numérique libre, éthique et écologique 
              au sein des établissements scolaires.
            </p>
          </div>
        </div>

        {/* Les 3 piliers */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg shadow-lg p-6">
            <div className="text-5xl mb-4">🤝</div>
            <h3 className="text-2xl font-bold mb-3">Inclusion</h3>
            <p className="leading-relaxed">
              Rendre le numérique accessible à tous, sans discrimination. 
              Lutter contre la fracture numérique et garantir l'égalité d'accès 
              aux outils et aux connaissances.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg shadow-lg p-6">
            <div className="text-5xl mb-4">🌱</div>
            <h3 className="text-2xl font-bold mb-3">Responsabilité</h3>
            <p className="leading-relaxed">
              Adopter des pratiques éthiques et transparentes. Privilégier 
              les logiciels libres, respecter la vie privée et promouvoir 
              la souveraineté numérique.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-lg shadow-lg p-6">
            <div className="text-5xl mb-4">♻️</div>
            <h3 className="text-2xl font-bold mb-3">Durabilité</h3>
            <p className="leading-relaxed">
              Minimiser l'impact environnemental du numérique. Favoriser 
              le réemploi, la réparation et la sobriété numérique pour 
              préserver notre planète.
            </p>
          </div>
        </div>

        {/* Nos actions */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-amber-900 mb-6 text-center">
            🎯 Nos actions principales
          </h2>
          <div className="space-y-4">
            {[
              {
                icon: "📚",
                title: "Sensibiliser à la sobriété numérique",
                desc: "Former les équipes éducatives et les élèves aux enjeux environnementaux du numérique"
              },
              {
                icon: "♻️",
                title: "Encourager le réemploi et le reconditionnement",
                desc: "Donner une seconde vie au matériel informatique pour réduire les déchets électroniques"
              },
              {
                icon: "🐧",
                title: "Promouvoir Linux",
                desc: "Utiliser des systèmes d'exploitation libres pour lutter contre l'obsolescence programmée"
              },
              {
                icon: "🏛️",
                title: "Mutualiser les ressources libres",
                desc: "Partager les outils et contenus via la Forge des communs numériques éducatifs"
              },
              {
                icon: "🌍",
                title: "Accompagner la transition écoresponsable",
                desc: "Aider les établissements et collectivités dans leur transformation numérique durable"
              },
              {
                icon: "🤝",
                title: "Co-construire des solutions locales",
                desc: "Développer ensemble des outils numériques ouverts et autonomes adaptés aux besoins"
              }
            ].map((action, i) => (
              <div 
                key={i}
                className="flex gap-4 p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border-l-4 border-amber-500 hover:shadow-md transition"
              >
                <div className="text-4xl flex-shrink-0">{action.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{action.title}</h3>
                  <p className="text-gray-700">{action.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pourquoi c'est important */}
        <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-center">
            ⚠️ Pourquoi c'est important ?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur">
              <h3 className="text-xl font-bold mb-3">🌍 Impact environnemental</h3>
              <ul className="space-y-2 text-sm">
                <li>• Le numérique représente 4% des émissions mondiales de GES</li>
                <li>• Un smartphone nécessite 70kg de matières premières</li>
                <li>• 50 millions de tonnes de déchets électroniques par an</li>
                <li>• 80% de l'impact vient de la fabrication des appareils</li>
              </ul>
            </div>
            
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur">
              <h3 className="text-xl font-bold mb-3">💰 Impact économique</h3>
              <ul className="space-y-2 text-sm">
                <li>• Les licences propriétaires coûtent des milliers d'euros</li>
                <li>• L'obsolescence force au rachat prématuré</li>
                <li>• Les logiciels libres permettent des économies massives</li>
                <li>• Le réemploi réduit les coûts de 30 à 70%</li>
              </ul>
            </div>
            
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur">
              <h3 className="text-xl font-bold mb-3">🔒 Souveraineté et données</h3>
              <ul className="space-y-2 text-sm">
                <li>• Les géants du web collectent massivement nos données</li>
                <li>• Dépendance aux solutions propriétaires américaines</li>
                <li>• Manque de contrôle sur nos infrastructures</li>
                <li>• Risques pour la vie privée et la sécurité</li>
              </ul>
            </div>
            
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur">
              <h3 className="text-xl font-bold mb-3">🎓 Enjeux éducatifs</h3>
              <ul className="space-y-2 text-sm">
                <li>• Former aux enjeux numériques responsables</li>
                <li>• Développer l'esprit critique face au numérique</li>
                <li>• Enseigner la culture du libre et du partage</li>
                <li>• Préparer aux défis environnementaux futurs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Les solutions NIRD */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-amber-900 mb-6 text-center">
            ✨ Les solutions NIRD
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-2 border-blue-300 rounded-lg p-6 bg-blue-50">
              <h3 className="text-xl font-bold text-blue-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">🔨</span>
                Logiciels libres
              </h3>
              <p className="text-gray-700 mb-3">
                Utiliser des alternatives libres et gratuites :
              </p>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>• Linux au lieu de Windows/Mac</li>
                <li>• LibreOffice au lieu de MS Office</li>
                <li>• Firefox au lieu de Chrome</li>
                <li>• Nextcloud au lieu de Google Drive</li>
              </ul>
            </div>
            
            <div className="border-2 border-green-300 rounded-lg p-6 bg-green-50">
              <h3 className="text-xl font-bold text-green-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">♻️</span>
                Réemploi et réparation
              </h3>
              <p className="text-gray-700 mb-3">
                Allonger la durée de vie du matériel :
              </p>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>• Ateliers de réparation collaboratifs</li>
                <li>• Reconditionnement des appareils</li>
                <li>• Installation de Linux sur vieux PC</li>
                <li>• Circuits de dons et d'échanges</li>
              </ul>
            </div>
            
            <div className="border-2 border-purple-300 rounded-lg p-6 bg-purple-50">
              <h3 className="text-xl font-bold text-purple-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">🏛️</span>
                Mutualisation
              </h3>
              <p className="text-gray-700 mb-3">
                Partager pour économiser :
              </p>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>• Forge des communs numériques</li>
                <li>• Ressources éducatives libres</li>
                <li>• Développement collaboratif</li>
                <li>• Partage d'expériences et de pratiques</li>
              </ul>
            </div>
            
            <div className="border-2 border-orange-300 rounded-lg p-6 bg-orange-50">
              <h3 className="text-xl font-bold text-orange-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">🎓</span>
                Formation et sensibilisation
              </h3>
              <p className="text-gray-700 mb-3">
                Transmettre les connaissances :
              </p>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>• Ateliers pratiques pour tous</li>
                <li>• Documentation et tutoriels</li>
                <li>• Accompagnement personnalisé</li>
                <li>• Communauté d'entraide</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Rejoindre le mouvement */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg shadow-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            🚀 Rejoins le mouvement de résistance !
          </h2>
          <p className="text-xl mb-6">
            Ensemble, construisons un numérique plus libre, plus juste et plus durable.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              href="/village"
              className="inline-block bg-white text-amber-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-100 transition shadow-lg"
            >
              🏰 Explorer le village
            </Link>
            <Link 
              href="/"
              className="inline-block bg-amber-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-800 transition shadow-lg"
            >
              🏠 Retour à l'accueil
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-amber-100 mb-2">
            Par le village, pour le village ! Résistons ensemble à l'empire numérique.
          </p>
          <p className="text-sm text-amber-200">
            © {new Date().getFullYear()} Démarche NIRD - Tous droits libérés
          </p>
        </div>
      </footer>
    </div>
  );
}
