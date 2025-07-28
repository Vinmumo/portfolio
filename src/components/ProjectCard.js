import React from 'react';

function ProjectCard({ project }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img src={project.image} className="card-img-top" alt={project.title} />
        <div className="card-body">
          <h5 className="card-title">{project.title}</h5>
          <p className="card-text">{project.description}</p>
          <a href={project.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
