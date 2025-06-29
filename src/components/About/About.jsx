import React from 'react';
import './About.css';
import aboutPic from '../../assets/about-pic.png';
import experienceIcon from '../../assets/experience.png';
import educationIcon from '../../assets/education.png';

function About() {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img src={aboutPic} alt="Profile" className="about-pic" />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img src={experienceIcon} alt="Experience" className="icon" />
              <h3>Experience</h3>
              <p>No Experience at present</p>
            </div>
            <div className="details-container">
              <img src={educationIcon} alt="Education" className="icon" />
              <h3>Education</h3>
              <p>
                B.Tech in Computer Science and Engineering<br />
                Student at K L Deemed to be University, Vaddeswaram, Guntur, AP
              </p>
            </div>
          </div>
          <div className="text-container">
            <p>
              As a diligent Computer Science and Engineering student, I possess
              strong work ethic and adaptability...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;