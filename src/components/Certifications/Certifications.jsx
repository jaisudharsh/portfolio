import React from 'react';
import './Certifications.css';
import awsCpIcon from '../../assets/AWSCP.png';

function Certifications() {
  const certifications = [
    {
      title: 'AWS CP',
      url: 'https://www.credly.com/badges/b4be7cc3-9205-479c-aeab-69d700b05bc0/public_url'
    },
    {
      title: 'AWS Solutions Architect',
      url: 'https://www.credly.com/badges/sample-url-1/public_url'
    },
    {
      title: 'AWS Security Specialist',
      url: 'https://www.credly.com/badges/sample-url-2/public_url'
    },
    {
      title: 'AWS Developer Associate',
      url: 'https://www.credly.com/badges/sample-url-3/public_url'
    }
  ];

  return (
    <section id="certifications">
      <p className="section__text__p1">Check out My</p>
      <h1 className="title">Certifications</h1>
      <div className="certifications-details-container">
        {certifications.map((cert, index) => (
          <div key={index} className="details-container color-container">
            <div className="article-container">
              <img src={awsCpIcon} alt={cert.title} className="project-img" />
            </div>
            <h2 className="certifications-sub-title">{cert.title}</h2>
            <div className="btn-container">
              <button
                className="btn btn-color"
                onClick={() => window.open(cert.url, '_blank')}
              >
                Verify Certificate
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
