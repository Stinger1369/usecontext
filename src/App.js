import React from 'react';
import { WeatherProvider } from './components/WeatherContext';
import WeatherPage from './pages/WeatherPage';
import './App.css';

function App() {
  return (
 <WeatherProvider>
    <div className="App">
      <WeatherPage />
    </div>
  </WeatherProvider>
  ); 
}

export default App;
