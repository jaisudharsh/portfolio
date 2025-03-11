import React from 'react';
import './Certifications.css';
import awsCpIcon from '../../assets/AWSCP.jpg';
import rpaIcon from '../../assets/rpaIcon.avif';
import redHat from '../../assets/redHat.jpg';
import salesForce from '../../assets/salesForce.jpg';

function Certifications() {
  const certifications = [
    {
      title: 'AWS CERTIFIED CLOUD PRACTITIONER',
      url: 'https://www.credly.com/badges/b4be7cc3-9205-479c-aeab-69d700b05bc0/public_url',
      img: awsCpIcon
    },
    {
      title: 'AUTOMATION ANYWHERE RPA',
      url: 'https://certificates.automationanywhere.com/28a51bde-fe09-455f-8727-927976dd5e05#acc.YUdIboJq',
      img: rpaIcon
    },
    {
      title: 'REDHAT EX-183',
      url: 'https://rhtapps.redhat.com/verify?certId=240-199-166',
      img: redHat
    },
    {
      title: 'SALESFORCE CERTIFIED AI ASSOCIATE',
      url: 'https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=vxsUNpn6AFWPROh9Sa9/dKnKNUTl6oBuA7+dNUw9cMk9KYMWQVoXOXygAYJE4WWQ',
      img: salesForce
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
              <img src={cert.img} alt={cert.title} className="project-img" />
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
