# 🚀 Guide de Démarrage Rapide

## Pour commencer immédiatement

```bash
npm run dev
```

Puis ouvrez [http://localhost:3000](http://localhost:3000)

## Navigation dans l'application

### 1. Page d'accueil (/)
- Présentation de la démarche NIRD
- Les 3 piliers : Inclusion, Responsabilité, Durabilité
- Bouton pour entrer dans le village

### 2. Le Village (/village)
- Carte interactive avec 6 bâtiments
- Barre de progression des clés collectées
- Cliquez sur un bâtiment pour commencer un défi

### 3. Bâtiments (/building/[id])
IDs disponibles : `forge`, `atelier`, `grenier`, `bibliotheque`, `forge-communs`, `tour`

Chaque bâtiment contient :
- Description et faits intéressants
- Quiz de 3 questions
- Obtention d'une clé si 60% de bonnes réponses

### 4. Certificat (/certificat)
- Accessible uniquement après avoir collecté les 6 clés
- Certificat personnalisé à imprimer
- Badge de Résistant Numérique

### 5. À propos (/about)
- Informations détaillées sur NIRD
- Les enjeux et solutions
- Impact environnemental du numérique

## Fonctionnalités clés

### Système de progression
- Sauvegardé automatiquement dans le navigateur (localStorage)
- Clé `nird-progress` : liste des bâtiments complétés
- Clé `nird-username` : nom pour le certificat

### Reset de la progression
Ouvrir la console du navigateur et exécuter :
```javascript
localStorage.removeItem('nird-progress')
localStorage.removeItem('nird-username')
location.reload()
```

## Structure des données

### Bâtiments (`app/data/buildings.ts`)
Chaque bâtiment contient :
- `id` : Identifiant unique
- `name` : Nom du bâtiment
- `icon` : Emoji représentatif
- `description` : Description longue
- `challenge` : Titre du défi
- `color` : Couleur thématique
- `facts` : Liste de faits intéressants

### Quiz
Chaque quiz contient 3 questions avec :
- `question` : La question posée
- `options` : 4 options de réponse
- `correctAnswer` : Index de la bonne réponse (0-3)
- `explanation` : Explication après validation

## Personnalisation

### Ajouter un bâtiment
1. Ajouter l'entrée dans `buildingsData` dans `app/data/buildings.ts`
2. Ajouter les questions dans `quizQuestions`
3. Mettre à jour le nombre total de clés dans les pages

### Modifier les questions
Éditer directement `app/data/buildings.ts` dans l'objet `quizQuestions`

### Changer le design
Les couleurs principales sont dans Tailwind :
- Primaire : `amber` (marron/doré)
- Secondaire : `orange`
- Accent : Couleur par bâtiment

## Tips de développement

### Hot Reload
Les modifications sont automatiquement rechargées pendant le développement.

### TypeScript
Les types sont définis dans `app/types/index.ts`

### Responsive
L'application est responsive grâce aux classes Tailwind `md:`, `lg:`

## Build de production

```bash
npm run build
npm start
```

## Troubleshooting

### La progression ne se sauvegarde pas
Vérifier que le localStorage est activé dans le navigateur.

### Les pages ne chargent pas
Vérifier que les IDs des bâtiments correspondent entre la carte du village et les routes.

### Erreurs de style
Tailwind CSS 4 est utilisé. Vérifier la compatibilité des classes.

---

Bon développement ! 🛡️
