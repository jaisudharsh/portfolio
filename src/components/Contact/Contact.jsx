import React from 'react';
import './Contact.css';
import emailIcon from '../../assets/email.png';
import linkedinIcon from '../../assets/linkedin.png';

function Contact() {
  return (
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img src={emailIcon} alt="Email" className="icon contact-icon" />
          <p>
            <a href="mailto:jaisudharsh@gmail.com">jaisudharsh@gmail.com</a>
            <br />
            <a href="mailto:2200032246cseh@gmail.com">2200032246cseh@gmail.com</a>
          </p>
        </div>
        <div className="contact-info-container">
          <img 
            src={linkedinIcon} 
            alt="LinkedIn" 
            className="icon contact-icon" 
            onClick={() => window.open('https://www.linkedin.com/in/mattupalli-jai-sudharsh/', '_blank')} 
          />
          <p>
            <a href="https://www.linkedin.com/in/mattupalli-jai-sudharsh">LinkedIn</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;