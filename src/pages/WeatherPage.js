import axios from 'axios';
import { useContext } from 'react';
import { WeatherContext } from '../components/WeatherContext';

function WeatherPage() {
  const {weatherData, city ,setCity} = useContext(WeatherContext);

const handleChange = (event) => {
    setCity(event.target.value);
}

const handleSubmit = (event) => {
    event.preventDefault();
}


  return (
    <div className="WeatherPage">
        <form onSubmit={handleSubmit}>
            <input type="text" value={city} onChange={handleChange} placeholder='Entrer le Nom de la ville' />
            <button type="submit">Rechercher</button>
        </form>
        {weatherData ? (
            <div>
                <h1>{weatherData.name}</h1>
                <p>{weatherData.main.temp}°C</p>
                <p>{weatherData.weather[0].description}</p>
                <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt="weather icon" />
            </div>
        ) : (
            <p>Aucune donnée à afficher</p>
        )}
     
    </div>
    );
}
export default WeatherPage;

 
