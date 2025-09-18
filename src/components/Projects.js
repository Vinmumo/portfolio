import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A modern portfolio built with React and Tailwind.',
    image: 'https://via.placeholder.com/400x200',
    link: 'https://your-portfolio-link.com',
  },
  {
    title: 'Flask Blog',
    description: 'A blog platform built with Flask and PostgreSQL.',
    image: 'https://via.placeholder.com/400x200',
    link: 'https://github.com/yourgithub/flask-blog',
  },
  {
    title: 'E-commerce Template',
    description: 'A mock e-commerce frontend built with React.',
    image: 'https://via.placeholder.com/400x200',
    link: 'https://github.com/yourgithub/ecommerce',
  },
];

function Projects() {
  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
