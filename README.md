# Gestionnaire de Diagrammes UML

Ce projet est une application MERN (MongoDB, Express, React, Node.js) qui permet de gérer des diagrammes UML pour divers projets informatiques. Il offre une interface utilisateur intuitive et réactive, ainsi qu'une API backend robuste.

## Structure du projet

Le projet est organisé comme suit :

```
diagram-manager
├── backend                # Code du serveur backend
│   ├── src
│   │   ├── controllers    # Logique des routes
│   │   ├── models         # Modèles de données
│   │   ├── routes         # Routes de l'application
│   │   └── app.js         # Point d'entrée de l'application backend
│   ├── package.json       # Dépendances et scripts du backend
│   └── README.md          # Documentation du backend
├── frontend               # Code de l'application frontend
│   ├── public
│   │   └── index.html     # Fichier HTML principal
│   ├── src
│   │   ├── components      # Composants React
│   │   ├── App.js         # Composant principal de l'application
│   │   ├── index.js       # Point d'entrée de l'application React
│   │   └── App.css        # Styles CSS de l'application
│   ├── package.json       # Dépendances et scripts du frontend
│   └── README.md          # Documentation du frontend
└── README.md              # Documentation générale du projet
```

## Installation

1. Clonez le dépôt :

   ```sh
   git clone <URL_DU_DEPOT>
   ```

2. Accédez au répertoire du projet :

   ```sh
   cd diagram-manager
   ```

3. Installez les dépendances pour le backend :

   ```sh
   cd backend
   npm install
   ```

4. Installez les dépendances pour le frontend :
   ```sh
   cd ../frontend
   npm install
   ```

## Démarrage de l'application

Pour démarrer l'application, exécutez les commandes suivantes dans deux terminaux séparés :

1. Pour le backend :

   ```sh
   cd backend
   npm start
   ```

2. Pour le frontend :
   ```sh
   cd frontend
   npm start
   ```

## Fonctionnalités

- Création, édition et suppression de diagrammes UML.
- Gestion de plusieurs projets informatiques.
- Visualisation des diagrammes UML générés par PlantUML.
- Interface utilisateur intuitive et réactive.
