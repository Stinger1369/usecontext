import axios from 'axios';
import { useEffect, useState } from 'react';



function WeatherPage() {
    const [weatherData, setWeatherData] = useState(null);
    useEffect(() => {
        const fetchWeatherData = async () => {
            try{
                const response = await axios.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=1a3e6e5e7a0c8e1f6d8f8d2a4c2a3e5b');
                setWeatherData(response.data);
            }catch(error){
                console.error('Erreur lors de la recup des donnée meteo',error);
            }
        }
        fetchWeatherData();
    }   , []);

    return (
        <div>
            {weatherData ? (
                <div>
                    <h1>{weatherData.name}</h1>
                    <p>Temps: {weatherData.weather[0].description}</p>
                    <p>Temperature: {weatherData.main.temp}</p>
                    <p>Temperature ressentie: {weatherData.main.feels_like}</p>
                    <p>Humidité: {weatherData.main.humidity}</p>
                    <p>Pression: {weatherData.main.pressure}</p>
                </div>
            ) : (
                <p>Chargement des données météo...</p>
            )}
        </div>
    )
}
export default WeatherPage;