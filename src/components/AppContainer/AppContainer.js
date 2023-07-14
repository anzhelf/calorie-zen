import React from 'react';
import './AppContainer.css';
import FoodAdder from '../FoodAdder/FoodAdder';

function AppContainer () {
  return (
    <div className="container">
      <div className="calories">
        <h2>Калории:</h2>
      </div>
      <FoodAdder/>
    </div>
  )
}

export default AppContainer;