import React from 'react';
import './Profile.css';
import profilePic from '../../assets/profile-pic.png';
import linkedinIcon from '../../assets/linkedin.png';
import githubIcon from '../../assets/github.png';

function Profile() {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img src={profilePic} alt="Profile" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Mattupalli Jai Sudharsh</h1>
        <p className="section__text__p2">Student</p>
        <div className="btn-container">
          <button
            className="btn btn-color"
            onClick={() => window.open('/resume.pdf', '_blank')}
          >
            View / Download My Resume
          </button>
          <button
            className="btn btn-color"
            onClick={() => (window.location.href = './#contact')}
          >
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src={linkedinIcon}
            alt="LinkedIn"
            className="icon"
            onClick={() => window.open('https://www.linkedin.com/in/mattupalli-jai-sudharsh/', '_blank')}
          />
          <img
            src={githubIcon}
            alt="Github"
            className="icon"
            onClick={() => window.open('https://github.com/jaisudharsh', '_blank')}
          />
        </div>
      </div>
    </section>
  );
}

export default Profile;