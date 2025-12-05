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
- **Chatbot intelligent** - Assistant virtuel pour répondre à vos questions sur NIRD
- **Sauvegarde locale** de la progression (localStorage)
- **Design thématique** inspiré du village gaulois résistant

## 🛠️ Technologies utilisées

- **Next.js 16** - Framework React
- **TypeScript** - Typage statique pour plus de sécurité
- **Tailwind CSS 4** - Framework CSS moderne pour le styling
- **React 19** - Bibliothèque UI avec les dernières fonctionnalités
- **Vercel Analytics** - Analyse de performance et d'engagement
- **API Routes** - Backend intégré pour le chatbot et la gestion des sessions

## 📦 Installation et démarrage

### Prérequis
- Node.js 20.x ou supérieur
- npm, yarn, pnpm ou bun

### Installation

```bash
# Cloner le dépôt
git clone https://github.com/salma-halloul/defi-nuit-info.git
cd defi-nuit-info

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Ouvrir http://localhost:3000 dans le navigateur
```

### Commandes disponibles

```bash
npm run dev      # Démarrer le serveur de développement
npm run build    # Construire pour la production
npm run start    # Démarrer le serveur de production
npm run lint     # Vérifier le code avec ESLint
```

## 🚀 Déploiement

Le projet est optimisé pour être déployé sur [Vercel](https://vercel.com) :

1. Push votre code sur GitHub
2. Connectez votre dépôt à Vercel
3. Vercel détecte automatiquement Next.js et configure le déploiement
4. Votre application est en ligne en quelques minutes !

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/salma-halloul/defi-nuit-info)

## 🎨 Structure du projet

```
app/
├── page.tsx                    # Page d'accueil
├── village/page.tsx            # Carte du village
├── building/[id]/page.tsx      # Page de chaque bâtiment avec quiz
├── certificat/page.tsx         # Page du certificat final
├── about/page.tsx              # Page "À propos" de NIRD
├── components/
│   └── Chatbot.tsx            # Composant du chatbot intelligent
├── api/
│   └── chat/
│       ├── session/route.ts   # API de gestion des sessions
│       └── message/route.ts   # API de traitement des messages
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

## 🤖 Chatbot Intelligent

Le village dispose d'un assistant virtuel disponible sur toutes les pages pour vous accompagner :

- **Réponses instantanées** aux questions sur la démarche NIRD
- **Conseils personnalisés** sur les logiciels libres et le numérique responsable
- **Interface conviviale** avec historique de conversation
- **Disponible 24/7** pour vous guider dans votre apprentissage

Le chatbot utilise une API externe pour fournir des réponses contextuelles et pertinentes sur tous les aspects du numérique inclusif, responsable et durable.

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

Libre de droit (pour la Nuit de l'Info 2025)

## 🎉 Crédits

Développé pour la Nuit de l'Info 2024 - Sujet National

**Équipe de développement :** BOLICE200_ISITCom

**Technologies :** Next.js 16, TypeScript, Tailwind CSS 4

**Hébergement :** Vercel

**Dépôt GitHub :** [salma-halloul/defi-nuit-info](https://github.com/salma-halloul/defi-nuit-info)

---

**Par le village, pour le village ! Résistons ensemble à l'empire numérique.** 🛡️
