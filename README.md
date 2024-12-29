# Frontend Prototype: React + TypeScript Dashboard

## Description
Ce projet est un prototype de frontend développé avec React et TypeScript. Il fournit une interface utilisateur permettant :

- D'afficher l'état général des projets et une liste des projets existants sous forme de graphiques.
- De naviguer vers une page dédiée pour chaque projet, avec des graphiques spécifiques et une liste des risques associés.
- De gérer les risques en supprimant les faux positifs identifiés.

### État Actuel

- **Données hardcodées** : En attendant que le backend soit pleinement fonctionnel, les données utilisées pour les graphiques et les listes sont statiques et intégrées directement dans le code.

## Fonctionnalités

1. **Dashboard Principal** :
   - Affichage des graphiques sur l'état général des projets.
   - Liste des projets avec navigation vers des pages dédiées.

2. **Pages Projet** :
   - Visualisation de graphiques dédiés pour chaque projet.
   - Affichage de la liste des risques associés.
   - Fonctionnalité de suppression des faux positifs directement depuis l'interface.

## Axes d'Amélioration

1. **Intégration avec le Backend** :
   - Connecter le frontend au backend Flask dès que celui-ci sera opérationnel.

2. **Amélioration de l'UX/UI** :
   - Ajouter des animations pour rendre la navigation plus fluide.
   - Permettre un tri et une recherche dynamique sur la liste des projets et des risques.

3. **Gestion des Données** :
   - Passer des données hardcodées à une intégration dynamique via les appels API.
   - Ajouter un état global avec des outils comme Redux.

4. **Tests** :
   - Implémenter des tests unitaires (Jest) et des tests d'intégration (React Testing Library).

## Installation et Exécution

### Prérequis
- Node.js 16+
- npm ou yarn

### Installation

1. Clonez ce dépôt :
   ```bash
   git clone <url-du-repo>
   cd <nom-du-repo>
   ```

2. Installez les dépendances :
   ```bash
   npm install
   ```

3. Lancez l'application en mode développement :
   ```bash
   npm run dev
   ```

4. Accédez à l'application dans votre navigateur :
   ```
   http://localhost:5137
   ```

## Technologies Utilisées

- **React** pour le développement de l'interface utilisateur.
- **TypeScript** pour la typage statique et la robustesse du code.
- **Recharts** pour la visualisation des données sous forme de graphiques.

## Problèmes Connus

- Données statiques : Les graphiques et listes affichent des informations hardcodées.
- Manque de gestion d'état global : Les données ne sont pas encore synchronisées à l'échelle de l'application.

## Prochaines Étapes

1. Connecter l'interface aux endpoints du backend.
2. Ajouter des fonctionnalités de filtrage et de tri dynamiques.
3. Tester et déployer l'application sur un service cloud.
