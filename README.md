# Weather App 🌦️

Ce projet est une application météo simple, développée avec **React.js** et **TypeScript**, qui utilise l'API OpenWeather pour afficher les informations météo d'une ville.

---

## 📋 Objectifs du projet

L'objectif de ce projet est de mettre en pratique les compétences suivantes :

### Frontend :
- Utiliser **React.js** pour construire des composants dynamiques et réactifs.
- Utiliser **TypeScript** pour typage strict et gestion d'erreurs au moment du développement.
- Appliquer **CSS natif** pour styliser l'application (sans frameworks CSS).
- Gérer les événements (exemple : rechercher une ville via un champ de texte).

### Backend / API :
- Faire des requêtes HTTP avec **Axios** pour interagir avec l'API OpenWeather.
- Travailler avec des données JSON en temps réel.
- Gérer les erreurs réseau ou API, comme les codes de statut 401 (Unauthorized).

---

## 🚀 Fonctionnalités principales

- **Rechercher une ville :** L'utilisateur peut entrer le nom d'une ville pour afficher ses données météo actuelles.
- **Données affichées :**
  - Température (en degrés Celsius).
  - Vitesse du vent.
  - Description du temps (ex. : "ciel dégagé").
- **Gestion des erreurs :** Un message s'affiche si la ville est introuvable ou si une erreur réseau survient.

---

## 🛠️ Technologies utilisées

- **React.js** : Pour créer l'interface utilisateur.
- **TypeScript** : Pour garantir un code robuste et bien typé.
- **Vite** : Pour un démarrage rapide et une expérience de développement rapide.
- **Axios** : Pour simplifier les requêtes HTTP.
- **API OpenWeather** : Fournit les données météo en temps réel.

---

## ⚙️ Installation et lancement

1. **Clonez ce dépôt :**
   ```bash
   git clone https://github.com/ton-utilisateur/weather-app.git
   cd weather-app

2. **Installez les dépendances :**
  npm install

3. **Ajoutez votre clé API OpenWeather :**

- Créez un fichier .env à la racine du projet. 
- Ajoutez la ligne suivante avec votre clé API: 
  VITE_OPENWEATHER_API_KEY=your_api_key

4. **Lancez le projet :**

npm run dev

5. **Ouvrez l'application dans votre navigateur :**

- Rendez-vous sur hhtps://localhost:5173

## 🌟 Ce que j'ai travaillé

- Gestion des états avec React : J'ai utilisé les hooks comme useState pour gérer les données de l'application.
- Utilisation d'une API externe : J'ai appris à envoyer des requêtes HTTP, traiter les réponses, et gérer les erreurs éventuelles.
- TypeScript : J'ai défini des types pour les données renvoyées par l'API, ce qui m'a permis d'éviter des erreurs et de rendre mon code plus maintenable.

## 📈 Améliorations possibles

- Ajouter un loader pendant le chargement des données.
- Intégrer une fonctionnalité pour détecter la localisation actuelle de l'utilisateur.
- Afficher des prévisions météo sur plusieurs jours.
- Ajouter des tests unitaires avec Jest et/ou React Testing Library.


## 📮 Contact 

Si vous avez des questions ou suggestions, n'hésitez pas à me contacter p.valadeau@outlook.fr ou à créer une issue dans ce dépôt. 😊