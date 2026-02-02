import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

function ProjectCard({ project }) {
  return (
    <motion.div
      className="group relative h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

      {/* Image Container */}
      <div className="relative overflow-hidden bg-gray-200 h-56 sm:h-64">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="relative p-6 sm:p-8 bg-white/95 backdrop-blur-sm h-full flex flex-col">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
        
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        {/* Links */}
        <div className="flex gap-4 pt-4 border-t border-gray-200">
          {project.link && (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 hover:text-purple-600 font-semibold transition-colors text-sm sm:text-base"
              whileHover={{ x: 5 }}
            >
              <ExternalLink size={18} />
              <span>View Project</span>
            </motion.a>
          )}
          <motion.a
            href="https://github.com/Vinmumo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-semibold transition-colors text-sm sm:text-base"
            whileHover={{ x: 5 }}
          >
            <Github size={18} />
            <span>Code</span>
          </motion.a>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 rounded-full -mr-16 -mt-16 transition-opacity duration-300 blur-2xl"></div>
    </motion.div>
  );
}

export default ProjectCard;
