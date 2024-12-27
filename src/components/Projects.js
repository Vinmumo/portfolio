import React from 'react';
import ProjectCard from './ProjectCard';
import projects from '../data/projects';

function Projects() {
  return (
    <div className="container mt-5">
      <h2 className="text-center">My Projects</h2>
      <div className="row">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
