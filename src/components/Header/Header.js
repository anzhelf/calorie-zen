import React from "react";
import "./Header.css";
import headerLogo from '../../images/calorieZen.png';

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={headerLogo} alt="Логотип приложения: пончик."/>
      <h1 className="header__header">Calorie-Zen</h1>
    </div>
  );
}

export default Header;