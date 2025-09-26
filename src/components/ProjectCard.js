import React from "react";
import { motion } from "framer-motion";

function ProjectCard({ project }) {
  return (
    <motion.div
      className="bg-gray-50 rounded-xl shadow hover:shadow-xl transition overflow-hidden"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
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
    </motion.div>
  );
}

export default ProjectCard;
