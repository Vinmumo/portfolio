import React from 'react';
import ProjectCard from './ProjectCard';
import Don from '../assets/images/don.jpeg';
import Ireporter from '../assets/images/ireporter.jpg';
import Escrow from '../assets/images/escrow.jpg';

const projects = [
  {
    title: 'EscrowEase',
    description: 'Welcome to our escrow service, where trust meets efficiency. With a commitment to safeguarding your transactions, we provide a secure platform for seamless exchanges. Our experienced team ensures transparency and reliability every step of the way, giving you peace of mind in every deal.',
    image: Escrow,
    link: 'https://escrow-ease-group-project.vercel.app/',
  },
  {
    title: 'Don Jerseys',
    description: 'An Ecommerce website for sports jerseys using React and Firebase.',
    image: Don,
    link: '',
  },
  {
    title: 'I-Reporter',
    description: 'Empowering citizens to speak up against corruption, fraud, and injustice. Stay anonymous, stay protected, and see real change as your reports drive accountability and transform communities.',
    image: Ireporter,
    link: 'https://i-reporter-client-1.vercel.app/',
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
