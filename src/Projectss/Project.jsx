import React from "react";
import { useState } from "react";
import "./Project.css"
import { Link } from "react-router-dom";


function Projects(){
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredLink, setHoveredLink] = useState(null);
  
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A fully responsive e-commerce solution with cart functionality, payment integration, and admin dashboard.",
      image: "🛒",
      link: "https://harishm-portfolio.netlify.app/",
      github: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task manager with real-time updates, team features, and productivity analytics.",
      image: "✓",
      link: "#",
      github: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Interactive weather application with location-based forecasts and beautiful data visualizations.",
      image: "🌤",
      link: "#",
      github: "#"
    },
    {
      id: 4,
      title: "Portfolio CMS",
      description: "Content management system for creative professionals to showcase their work with custom themes.",
      image: "📱",
      link: "#",
      github: "#"
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="sectionTitle">Projects</h2>
        <div className="projectsGrid">
          {projects.map(project => (
            <div 
            className="projectCard"
              key={project.id} 
              style={{
               
                transform: hoveredCard === project.id ? 'scale(1.03)' : 'scale(1)',
                boxShadow: hoveredCard === project.id 
                  ? '0 12px 40px rgba(139, 92, 246, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.15)' 
                  : '0 8px 30px rgba(139, 92, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              }}
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="projectImage">{project.image}</div>
              <div className="projectContent">
                <h3 className="projectTitle">{project.title}</h3>
                <p className="projectDescription">{project.description}</p>
                <div className="projectLinks">
                  <Link
                  className="projectLink"
                    to={project.link} 
                    style={{
                  
                      transform: hoveredLink === `${project.id}-link` ? 'scale(1.1)' : 'scale(1)',
                    }}
                    onMouseEnter={() => setHoveredLink(`${project.id}-link`)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    View Demo
                  </Link>
                  <Link
                  className="projectLink"
                    to={project.github} 
                    style={{
                      
                      transform: hoveredLink === `${project.id}-github` ? 'scale(1.1)' : 'scale(1)',
                    }}
                    onMouseEnter={() => setHoveredLink(`${project.id}-github`)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    GitHub
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

