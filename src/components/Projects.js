import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A modern portfolio built with React.',
    image: 'https://via.placeholder.com/400x200',
    link: '',
  },
  {
    title: 'Flask Blog',
    description: 'A blog platform built with Flask and PostgreSQL.',
    image: 'https://via.placeholder.com/400x200',
    link: '',
  },
  {
    title: 'E-commerce Template',
    description: 'A mock e-commerce frontend built with React and Bootstrap.',
    image: 'https://via.placeholder.com/400x200',
    link: '',
  },
];

function Projects() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Projects</h2>
      <div className="row">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
