# 🛡️ Le Village Numérique Résistant

Une plateforme web ludique et interactive pour sensibiliser à la démarche NIRD (Numérique Inclusif, Responsable et Durable) dans les établissements scolaires.

## 🎯 Concept

Le Village Numérique Résistant transforme un établissement scolaire en village gaulois où l'utilisateur explore 6 bâtiments symbolisant les armes de l'autonomie numérique. À travers des mini-jeux et des défis pratiques, il découvre comment lutter contre l'obsolescence programmée, réduire la dépendance aux licences coûteuses et reprendre le contrôle des données.

## 🏗️ Les 6 Bâtiments

1. **🔨 La Forge des Logiciels Libres** - Découvrir la puissance de l'open source
2. **🔧 L'Atelier de Réparation** - Lutter contre l'obsolescence programmée
3. **♻️ Le Grenier du Réemploi** - Donner une seconde vie aux appareils
4. **🐧 La Bibliothèque Linux** - Maîtriser Linux et se libérer de Windows/Mac
5. **🏛️ La Forge des Communs** - Mutualiser les ressources éducatives libres
6. **🗼 La Tour de Données** - Reprendre le contrôle de ses données

## 🎮 Fonctionnalités

- **Page d'accueil** avec présentation de la démarche NIRD
- **Carte interactive du village** avec les 6 bâtiments
- **Quiz éducatifs** pour chaque bâtiment (3 questions par bâtiment)
- **Système de progression** avec collecte de 6 clés de résistance
- **Certificat personnalisé** à obtenir après complétion
- **Sauvegarde locale** de la progression (localStorage)
- **Design thématique** inspiré du village gaulois résistant

## 🛠️ Technologies utilisées

- **Next.js 16** - Framework React
- **TypeScript** - Typage statique
- **Tailwind CSS** - Styling
- **React Hooks** - Gestion d'état

## 📦 Installation et démarrage

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Ouvrir http://localhost:3000 dans le navigateur
```

## 🎨 Structure du projet

```
app/
├── page.tsx                    # Page d'accueil
├── village/page.tsx            # Carte du village
├── building/[id]/page.tsx      # Page de chaque bâtiment avec quiz
├── certificat/page.tsx         # Page du certificat final
├── about/page.tsx              # Page "À propos" de NIRD
├── types/index.ts              # Types TypeScript
├── data/buildings.ts           # Données des bâtiments et quiz
├── globals.css                 # Styles globaux
└── layout.tsx                  # Layout principal
```

## 🎓 Les 3 Piliers NIRD

### 🤝 Inclusion
Un numérique accessible à tous, sans discrimination. Lutter contre la fracture numérique.

### 🌱 Responsabilité
Des pratiques éthiques et transparentes. Privilégier les logiciels libres et respecter la vie privée.

### ♻️ Durabilité
Minimiser l'impact environnemental. Favoriser le réemploi, la réparation et la sobriété numérique.

## 🚀 Actions principales de NIRD

- Sensibiliser à la sobriété numérique
- Encourager le réemploi et le reconditionnement
- Promouvoir Linux pour lutter contre l'obsolescence
- Mutualiser les ressources via la Forge des communs numériques
- Accompagner la transition numérique écoresponsable
- Co-construire des solutions locales et autonomes

## 📈 Progression

1. **Explorer** les 6 bâtiments du village
2. **Répondre** aux quiz (60% de bonnes réponses minimum)
3. **Collecter** les 6 clés de résistance
4. **Obtenir** le certificat de Résistant Numérique
5. **Rejoindre** la communauté NIRD

## 🎯 Objectifs pédagogiques

- Sensibiliser aux enjeux du numérique responsable
- Former aux alternatives libres et durables
- Développer l'esprit critique face au numérique
- Promouvoir la culture du libre et du partage
- Préparer aux défis environnementaux futurs

## 🌍 Impact

Le numérique représente :
- 4% des émissions mondiales de GES
- 50 millions de tonnes de déchets électroniques par an
- 80% de l'impact environnemental vient de la fabrication

**Nos solutions :**
- Réemployer un ordinateur évite 200kg de CO2
- Réparer réduit l'empreinte carbone de 80%
- Linux fait fonctionner un PC de 15 ans
- Les logiciels libres permettent des économies massives

## 🏆 Certificat

À la fin de l'aventure, l'utilisateur reçoit un certificat personnalisé attestant de ses compétences en :
- Maîtrise des logiciels libres
- Réparation et lutte contre l'obsolescence
- Pratiques de réemploi numérique
- Connaissance de Linux
- Mutualisation des ressources
- Protection des données personnelles

## 🤝 Contribution

Ce projet est open source et s'inscrit dans la démarche NIRD. Les contributions sont les bienvenues !

## 📝 Licence

Tous droits libérés - Démarche NIRD

## 🎉 Crédits

Développé pour la Nuit de l'Info 2024 - Défi NIRD

---

**Par le village, pour le village ! Résistons ensemble à l'empire numérique.** 🛡️
