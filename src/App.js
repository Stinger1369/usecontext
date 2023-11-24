import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WeatherPage from './pages/WeatherPage';
import './App.css';

function App() {
  return (
 <Router>
 <div>
    <Switch>
      <Route exact path="/">
        <WeatherPage />
      </Route>
    </Switch>
 </div>
 </Router>
  ); 
}

export default App;
