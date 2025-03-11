import React from 'react';
import './Projects.css';
import project1Img from '../../assets/project-1.png';
import project2Img from '../../assets/project-2.png';
import project3Img from '../../assets/project-3.png';
import arrowIcon from '../../assets/arrow.png';

function Projects() {
  const projectList = [
    { 
      title: 'Project One', 
      imgSrc: project1Img, 
      githubLink: 'https://github.com/sample-project-1' 
    },
    { 
      title: 'Project Two', 
      imgSrc: project2Img, 
      githubLink: 'https://github.com/sample-project-2' 
    },
    { 
      title: 'Project Three', 
      imgSrc: project3Img, 
      githubLink: 'https://github.com/sample-project-3' 
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
              View
            </button>
          </div>
        ))}
      </div>
      <img
        src={arrowIcon}
        alt="Arrow"
        className="icon arrow"
        onClick={() => (window.location.href = './#contact')}
      />
    </section>
  );
}

export default Projects;
