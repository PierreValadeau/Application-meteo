import React, { useState } from "react";
import axios from "axios";

// Définir le type des données météo renvoyées par l'API
interface WeatherData {
  name: string; // Nom de la ville
  sys: {
    country: string; // Code du pays
  };
  main: {
    temp: number; // Température en °C
  };
  wind: {
    speed: number; // Vitesse du vent en m/s
  };
  weather: {
    description: string; // Description du temps (ex. : "clear sky")
  }[];
}

const App: React.FC = () => {
  const [city, setCity] = useState<string>(""); // Ville recherchée
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null); // Données météo
  const [error, setError] = useState<string>(""); // Message d'erreur éventuel

  // Fonction pour gérer la recherche
  const handleSearch = async () => {
    if (!city) return;

    try {
      setError(""); // Réinitialise l'erreur
      const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY; // Récupère la clé API
      console.log("api key", apiKey);
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      const response = await axios.get<WeatherData>(url); // Précise le type attendu dans la réponse
      setWeatherData(response.data); // Stocke les données météo
    } catch (err) {
      console.error(err);
      setError("Ville introuvable ou erreur réseau."); // Gère les erreurs
      setWeatherData(null); // Réinitialise les données en cas d'erreur
    }
  };

  return (
    <div className="mainDiv">
      <h1>Weather App</h1>

      {/* Input pour la recherche de ville */}
      <input
        type="text"
        className="inputText"
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
          <h2>
            {weatherData.name}, {weatherData.sys.country}
          </h2>
          <p>
            <strong>Temperature:</strong> {weatherData.main.temp}°C
          </p>
          <p>
            <strong>Wind:</strong> {weatherData.wind.speed} m/s
          </p>
          <p>
            <strong>Sky:</strong> {weatherData.weather[0].description}
          </p>
        </div>
      )}
    </div>
  );
};

export default App;
