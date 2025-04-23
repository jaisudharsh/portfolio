import React from 'react';
import './Projects.css';
import project1 from '../../assets/banner.png';
import project2 from '../../assets/project2.png';
import project3 from '../../assets/project3.jpeg';
import project4 from '../../assets/project4.jpeg';
import project5 from '../../assets/project5.jpeg';

function Projects() {
  const projectList = [
    { 
      title: 'Banking & Finance Website using MERN', 
      imgSrc: project1, 
      githubLink: 'https://github.com/jaisudharsh/projects',
      articeLink: 'https://www.linkedin.com/pulse/skill-development-project-arvapalli-greeshmanth/?trackingId=ySJrGG9bAsdGDWZI6IUKgA%3D%3D'
    },
    { 
      title: 'Student Learning Management System using Django', 
      imgSrc: project2, 
      githubLink: 'https://github.com/Greeshmanth3699/Student-Learning-Management-System',
      articeLink: 'https://www.linkedin.com/pulse/student-learning-management-system-arvapalli-greeshmanth-gigyc/?trackingId=NfhTOvIrV5QnHYrooT1LdQ%3D%3D'
    },
    { 
      title: 'Student Feedback Evaluation System using Spring boot', 
      imgSrc: project3, 
      githubLink: 'https://github.com/Greeshmanth3699/FeedbackEvaluationSystem',
      articeLink: 'https://www.linkedin.com/posts/mattupalli-jai-sudharsh_klu-sdp-feedbackmanagementsystem-activity-7246778751659728896-aU5K?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD0j3PIBtwWW63Vx6VE72gDnqcp5KxbB7QE'
    },
    { 
      title: 'Placement Portal Web Design using RedHat Enterprise Programming', 
      imgSrc: project4, 
      githubLink: 'https://github.com/jaisudharsh/Placement_Portal_RedHat',
      articeLink: 'https://www.linkedin.com/posts/arvapalli-greeshmanth_webdevelopment-webdesign-webdeveloper-activity-7222893418094501888-6Az_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD0j3PIBtwWW63Vx6VE72gDnqcp5KxbB7QE'
    },
    { 
      title: 'Bus Booking System using .NET', 
      imgSrc: project5, 
      githubLink: 'https://github.com/Greeshmanth3699/BusBookingSystem',
      articeLink: ''
    }
  ];

  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="projects-container">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.imgSrc} alt={project.title} className="project-img" />
            <h2 className="project-title">{project.title}</h2>
            <button
              className="btn btn-color"
              onClick={() => window.open(project.githubLink, '_blank')}
            >
              View in Github
            </button>
            {project.articeLink && (
              <button
                className="btn btn-color"
                onClick={() => window.open(project.articeLink, '_blank')}
              >
              View LinkedIn Article
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
