# 🗺️ Architecture du Projet

## 📁 Structure des Fichiers

```
defi-nuit-info/
│
├── app/                                    # Application Next.js
│   ├── page.tsx                           # 🏠 Page d'accueil
│   ├── layout.tsx                         # Layout principal
│   ├── globals.css                        # Styles globaux
│   │
│   ├── village/
│   │   └── page.tsx                       # 🏰 Carte interactive du village
│   │
│   ├── building/
│   │   └── [id]/
│   │       └── page.tsx                   # 🏗️ Page dynamique des bâtiments
│   │
│   ├── certificat/
│   │   └── page.tsx                       # 🏆 Page du certificat
│   │
│   ├── about/
│   │   └── page.tsx                       # ℹ️ Page à propos de NIRD
│   │
│   ├── types/
│   │   └── index.ts                       # 📝 Types TypeScript
│   │
│   └── data/
│       └── buildings.ts                   # 💾 Données (bâtiments + quiz)
│
├── public/                                 # Assets statiques
│
├── package.json                            # Dépendances npm
├── tsconfig.json                          # Config TypeScript
├── next.config.ts                         # Config Next.js
├── tailwind.config.ts                     # Config Tailwind CSS
├── postcss.config.mjs                     # Config PostCSS
├── eslint.config.mjs                      # Config ESLint
│
├── README.md                              # Documentation originale
├── README-NIRD.md                         # 📖 Documentation complète
├── GUIDE-DEMARRAGE.md                     # 🚀 Guide rapide
├── AMELIORATIONS.md                       # 💡 Idées d'améliorations
└── CONTENU-ADDITIONNEL.md                 # 📝 Contenu supplémentaire
```

## 🔄 Flux de Navigation

```
┌─────────────────┐
│  Page d'accueil │  (/)
│    🏠 Home      │
└────────┬────────┘
         │
         │ Clic sur "Entrer dans le village"
         ▼
┌─────────────────┐
│   Le Village    │  (/village)
│  🏰 Interactive │
│     Map         │
└────────┬────────┘
         │
         │ Clic sur un bâtiment
         ▼
┌─────────────────┐
│   Bâtiment      │  (/building/[id])
│   🏗️ Quiz       │
│   Challenge     │
└────────┬────────┘
         │
         │ Obtention de 6 clés
         ▼
┌─────────────────┐
│   Certificat    │  (/certificat)
│  🏆 Validation  │
│   + Impression  │
└─────────────────┘

        ℹ️
        │
        ▼
┌─────────────────┐
│   À Propos      │  (/about)
│   Information   │
│     NIRD        │
└─────────────────┘
```

## 🎮 Système de Progression

```
État Initial
├─ completedBuildings: []
├─ keysCollected: 0/6
└─ certificateAvailable: false

    ↓ Compléter un bâtiment (score ≥ 60%)

État Intermédiaire
├─ completedBuildings: ['forge']
├─ keysCollected: 1/6
└─ certificateAvailable: false

    ↓ Compléter tous les bâtiments

État Final
├─ completedBuildings: ['forge', 'atelier', 'grenier', 'bibliotheque', 'forge-communs', 'tour']
├─ keysCollected: 6/6
└─ certificateAvailable: true ✅
```

## 💾 Gestion des Données

### LocalStorage
```javascript
// Progression
localStorage.getItem('nird-progress')
// → ["forge", "atelier", ...]

// Nom utilisateur
localStorage.getItem('nird-username')
// → "Marie Dupont"
```

### Structure des données

```typescript
// Building
{
  id: string,
  name: string,
  icon: string,
  description: string,
  challenge: string,
  color: string,
  facts: string[]
}

// Quiz Question
{
  question: string,
  options: string[],        // 4 options
  correctAnswer: number,    // Index 0-3
  explanation: string
}
```

## 🎨 Système de Design

### Palette de Couleurs
```
Primaires:
├─ Amber (marron/doré)    → #D97706, #F59E0B, #FBBF24
├─ Orange                 → #EA580C, #F97316, #FB923C
└─ Yellow                 → #EAB308, #FCD34D

Par Bâtiment:
├─ Forge       → Red      (#DC2626)
├─ Atelier     → Blue     (#2563EB)
├─ Grenier     → Green    (#16A34A)
├─ Biblio      → Purple   (#7C3AED)
├─ Communs     → Amber    (#D97706)
└─ Tour        → Indigo   (#4F46E5)

Neutres:
├─ Gris        → #6B7280, #9CA3AF, #D1D5DB
└─ Blancs      → #F9FAFB, #FFFFFF
```

### Composants Récurrents

```
📦 Card
├─ bg-white
├─ rounded-lg
├─ shadow-lg
├─ p-6 / p-8
└─ border (optionnel)

🔘 Button Primary
├─ bg-gradient-to-r from-amber-600 to-orange-600
├─ text-white
├─ px-8 py-4
├─ rounded-full
├─ font-bold
└─ hover:shadow-xl hover:scale-105

🎯 Badge
├─ inline-block
├─ px-3 py-1
├─ rounded-full
├─ text-xs font-semibold
└─ bg-[color]-100 text-[color]-800
```

## 🔧 Technologies

```
Frontend:
├─ Next.js 16          → Framework React
├─ React 19            → UI Library
├─ TypeScript 5        → Type Safety
└─ Tailwind CSS 4      → Styling

Build Tools:
├─ PostCSS             → CSS Processing
├─ ESLint              → Linting
└─ npm                 → Package Manager

Deployment:
└─ Vercel / Netlify    → Hébergement
```

## 📊 Métriques de Performance

```
Objectifs:
├─ Lighthouse Score    → > 90
├─ First Paint         → < 1s
├─ Time to Interactive → < 3s
├─ Bundle Size         → < 500KB
└─ Accessibilité       → 100%
```

## 🧪 Tests (à implémenter)

```
Tests Unitaires (Jest):
├─ Composants React
├─ Logique métier
└─ Utilitaires

Tests E2E (Playwright):
├─ Parcours complet utilisateur
├─ Validation des quiz
├─ Obtention du certificat
└─ Sauvegarde de progression
```

## 🔐 Sécurité

```
Actuellement:
├─ Pas d'authentification
├─ Données en local (localStorage)
└─ Pas de données sensibles

Future:
├─ Authentification JWT
├─ Chiffrement des données
├─ Protection CSRF
└─ Rate limiting
```

## 🌍 SEO & Métadonnées

```
À ajouter dans layout.tsx:
├─ title: "Le Village Numérique Résistant | NIRD"
├─ description: "Plateforme ludique..."
├─ keywords: "NIRD, numérique responsable..."
├─ og:image: Image de preview
└─ og:type: website
```

## 📱 Responsive Design

```
Breakpoints Tailwind:
├─ sm:  640px   → Mobile landscape
├─ md:  768px   → Tablette
├─ lg:  1024px  → Desktop
└─ xl:  1280px  → Large desktop

Mobile First:
└─ Design optimisé mobile puis élargi
```

## 🚀 Déploiement

```
npm run build     → Build production
npm start         → Serveur production local

Vercel:
└─ Déploiement automatique depuis Git

Variables d'env (futures):
├─ DATABASE_URL
├─ JWT_SECRET
└─ API_KEY
```

---

Cette architecture est modulaire et évolutive pour faciliter les futures améliorations ! 🎯
