import React from 'react';

function ProjectCard({ project }) {
  return (
    <div className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition overflow-hidden">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 font-medium hover:underline"
        >
          View Project →
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
