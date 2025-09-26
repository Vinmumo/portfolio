import React from "react";
import ProjectCard from "./ProjectCard";
import Don from "../assets/images/don.jpeg";
import Ireporter from "../assets/images/ireporter.jpg";
import Escrow from "../assets/images/escrow.jpg";

const projects = [
  {
    title: "EscrowEase",
    description:
      "A secure escrow service platform ensuring transparency and reliability in transactions.",
    image: Escrow,
    link: "https://escrow-ease-group-project.vercel.app/",
  },
  {
    title: "Don Jerseys",
    description: "An Ecommerce website for sports jerseys built with React and Firebase.",
    image: Don,
    link: "",
  },
  {
    title: "I-Reporter",
    description:
      "A platform empowering citizens to report corruption, fraud, and injustice anonymously.",
    image: Ireporter,
    link: "https://i-reporter-client-1.vercel.app/",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
