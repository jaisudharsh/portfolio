import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <nav>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="developer">
        <h4>Developed By</h4>
        <h3>Jai Sudharsh</h3>
      </div>
    </footer>
  );
}

export default Footer;