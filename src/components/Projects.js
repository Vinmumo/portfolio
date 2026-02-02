import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import Don from "../assets/images/don.jpeg";
import Ireporter from "../assets/images/ireporter.jpg";
import Escrow from "../assets/images/escrow.jpg";

const projects = [
  {
    title: "EscrowEase",
    description:
      "A secure escrow service platform ensuring transparency and reliability in transactions. Built with modern technologies for seamless user experience.",
    image: Escrow,
    link: "https://escrow-ease-group-project.vercel.app/",
  },
  {
    title: "Don Jerseys",
    description: "An Ecommerce platform for sports jerseys with full-featured shopping cart, payments, and inventory management built with React and Firebase.",
    image: Don,
    link: "",
  },
  {
    title: "I-Reporter",
    description:
      "A citizen empowerment platform enabling anonymous reporting of corruption, fraud, and injustice with secure data management.",
    image: Ireporter,
    link: "https://i-reporter-client-1.vercel.app/",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 left-10 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Showcasing my best work across web development, e-commerce, and citizen engagement platforms.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-700 mb-6 text-lg">Want to see more of my work?</p>
          <motion.a
            href="https://github.com/Vinmumo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Visit My GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
