import React from 'react';
import { WeatherProvider } from './components/WeatherContext';
import { ThemeProvider } from './components/ThemeContext';

import WeatherPage from './pages/WeatherPage';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <WeatherProvider>
        <div className="App">
         <WeatherPage />
         
        </div>
      </WeatherProvider>
    </ThemeProvider>
  ); 
}

export default App;
