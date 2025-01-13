// src/App.jsx
import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [city, setCity] = useState(""); // Ville recherchée
  const [weatherData, setWeatherData] = useState(null); // Données météo
  const [error, setError] = useState(""); // Message d'erreur éventuel

  const handleSearch = async () => {
    if (!city) return; // Vérifie qu'une ville est entrée

    try {
      setError(""); // Réinitialise l'erreur
      const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY; // Récupère la clé API depuis .env
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      const response = await axios.get(url);
      setWeatherData(response.data); // Stocke les données météo
    } catch (err) {
      console.error(err);
      setError("Ville introuvable ou erreur réseau."); // Gère les erreurs
      setWeatherData(null); // Réinitialise les données en cas d'erreur
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Weather App</h1>

      {/* Input pour la recherche de ville */}
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ padding: "10px", fontSize: "16px" }}
      />
      <button
        onClick={handleSearch}
        style={{
          padding: "10px 20px",
          marginLeft: "10px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Search
      </button>

      {/* Affichage des résultats */}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {weatherData && (
        <div style={{ marginTop: "20px" }}>
          <h2>{weatherData.name}, {weatherData.sys.country}</h2>
          <p><strong>Temperature:</strong> {weatherData.main.temp}°C</p>
          <p><strong>Wind:</strong> {weatherData.wind.speed} m/s</p>
          <p><strong>Weather:</strong> {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default App;
