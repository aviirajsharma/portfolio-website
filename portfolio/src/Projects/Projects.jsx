import React, { useState } from 'react';
import './Projects.css';
import webpic from '../assets/images/PortfolioWebsite.jpg';
import weatherpic from '../assets/images/combined_ss.png';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      category: "Website",
      image: webpic,
      description: "A personal portfolio website showcasing projects, skills, and contact information.",
      technologies: ["React", "HTML", "Node.js", "CSS", "Canva"],
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "Weather App",
      category: "Andriod Application",
      image: weatherpic,
      description: "A weather application that provides real-time weather updates, forecasts, and weather alerts.",
      technologies: ["Kotlin", "Jetpack Compose", "OpenWeather API", "Canva","Restful API"],
      link: "#",
      github: "#"
    },
    {
      id: 3,
      title: "and more basic projects",
      category: "",
      image: "",
      description: "Building more basic projects to get more experience",
      technologies: [""],
      link: "#",
      github: "#"
    },
  ];
  
  const handleProjectHover = (id) => {
    setActiveProject(id);
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2>My Projects</h2>
          <div className="underline"></div>
        </div>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div 
              className="project-card glass"
              key={project.id}
              onMouseEnter={() => handleProjectHover(project.id)}
              onMouseLeave={() => handleProjectHover(null)}
            >
              <div className="project-img">
                <img src={project.image} alt={project.title} />
                <div className={`project-overlay ${activeProject === project.id ? 'active' : ''}`}>
                  <div className="project-links">
                    <a href={project.link} className="btn btn-primary btn-sm">View Live</a>
                    <a href={project.github} className="btn btn-secondary btn-sm">Source Code</a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="projects-cta">
          <a href="#" className="btn btn-secondary">See All Projects</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;