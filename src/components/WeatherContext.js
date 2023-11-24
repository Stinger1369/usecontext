import React, {createContext, useState, useEffect} from "react";
import axios from 'axios';

export const WeatherContext = createContext();

export const WeatherProvider = ({children}) => {
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState('Marseille');

    const fetchWeatherData = async () => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric&lang=fr`);
            setWeatherData(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Erreur lors de la récupération des données météo', error);
        }
    };

useEffect(() => {
    fetchWeatherData();
}, [city]);

    return (
        <WeatherContext.Provider value={{weatherData, setWeatherData, city, setCity}}>
            {children}
        </WeatherContext.Provider>
    )
}