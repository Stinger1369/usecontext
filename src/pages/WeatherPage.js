import axios from 'axios';
import { useContext,useState } from 'react';
import { WeatherContext } from '../components/WeatherContext';
import ContextModal from '../pages/Modal';
import Button from "react-bootstrap/Button";
import { ThemeContext } from '../components/ThemeContext';


function WeatherPage() {
  const {weatherData, city ,setCity} = useContext(WeatherContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

const handleChange = (event) => {
    setCity(event.target.value);
}

const handleSubmit = (event) => {
    event.preventDefault();
}

const [showModal, setShowModal] = useState(false);
const handleClose = () => {
    console.log("Fermeture du modal");
    setShowModal(false);
};

  return (
       <div className={`WeatherPage ${theme}`}>
        <Button variant="secondary" onClick={toggleTheme}>
        Changer de thème
        </Button>
            <form onSubmit={handleSubmit}>
            <input type="text" value={city} onChange={handleChange} placeholder='Entrer le Nom de la ville' />
            <button type="submit">Rechercher</button>
        </form>
        
        {weatherData ? (
            <div>
                <h1>{weatherData.name}</h1>
                <p>{weatherData.main.temp}°C</p>
                <p>{weatherData.weather[0].description}</p>
                <p>{weatherData.main.humidity}%</p>
                <p>{weatherData.wind.speed} km/h</p>
                <p>{weatherData.sys.country}</p>
                <p>{weatherData.main.temp_min}°C</p>
             


                <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt="weather icon" />
             
            </div>
        ) : (
            <p>Aucune donnée à afficher</p>
        )}
      <Button variant="primary" onClick={() => setShowModal(true)}>
        Comprendre useContext
      </Button>

      <ContextModal show={showModal} handleClose={handleClose} />

    </div>
    );
}
export default WeatherPage;

 
