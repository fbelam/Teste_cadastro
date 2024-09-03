import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom'; // Importando o Link


function Nav() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="navbar-link">Home</a>
        <a href="#about" className="navbar-link">About</a>
        <a href="#services" className="navbar-link">Services</a>
      </div>
      <div className="navbar-right">
        <button className="navbar-button">Sign In</button>
        <button className="navbar-button">Sign Up</button>
      </div>
    </nav>
  );
}

export default Nav;
