import React from 'react';
import './Navbar.css';

function toggleMenu() {
  const menu = document.querySelector('.menu-links');
  const icon = document.querySelector('.hamburger-icon');
  menu.classList.toggle('open');
  icon.classList.toggle('open');
}

function Navbar() {
  return (
    <nav id="navbar">
      <div className="logo">Mattupalli Jai Sudharsh</div>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#certifications">Certifications</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="hamburger-menu">
        <div className="hamburger-icon" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="menu-links">
          <a href="#about" onClick={toggleMenu}>About</a>
          <a href="#certifications" onClick={toggleMenu}>Certifications</a>
          <a href="#projects" onClick={toggleMenu}>Projects</a>
          <a href="#contact" onClick={toggleMenu}>Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;