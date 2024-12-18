# README.md pour le backend

Ce fichier contient la documentation pour le backend du projet MERN Stack.

## Description

Le backend de ce projet est construit avec Node.js et Express. Il gère les requêtes API pour interagir avec la base de données MongoDB et fournit les données nécessaires à l'application frontend.

## Structure du projet

- **src/** : Contient le code source de l'application.
  - **controllers/** : Gère la logique des routes.
  - **models/** : Définit les modèles de données pour MongoDB.
  - **routes/** : Configure les endpoints de l'application.
  - **app.js** : Point d'entrée de l'application backend.

## Installation

1. Accédez au répertoire backend :
   ```sh
   cd backend
   ```

2. Installez les dépendances :
   ```sh
   npm install
   ```

## Démarrage

Pour démarrer le serveur backend, utilisez la commande suivante :
```sh
npm start
```

Le serveur sera accessible à l'adresse `http://localhost:5000` par défaut.

## API

Les routes de l'API sont définies dans le fichier `src/routes/index.js`. Vous pouvez consulter ce fichier pour voir les endpoints disponibles et leur utilisation.

## Contribuer

Les contributions sont les bienvenues ! Veuillez soumettre une demande de tirage pour toute amélioration ou correction.