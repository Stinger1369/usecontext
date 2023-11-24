import axios from 'axios';
import { useEffect, useState } from 'react';

function WeatherPage() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
        
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${process.env.REACT_APP_WEATHER_API_KEY}`);
        setWeatherData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données météo', error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div>
      {weatherData ? (
        <div>
          <h1>Température : {weatherData.main.temp}°C</h1>
            <p>Humidité : {weatherData.main.humidity}%</p>
            <p>Pression : {weatherData.main.pressure} hPa</p>
            <p>Vitesse du vent : {weatherData.wind.speed} m/s</p>
            <p>Direction du vent : {weatherData.wind.deg}°</p>
          <p>Conditions : {weatherData.weather[0].description}</p>

        </div>
      ) : (
        <p>Chargement des données météo...</p>
      )}
    </div>
  );
}

export default WeatherPage;
