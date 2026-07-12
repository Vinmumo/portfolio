import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

function ProjectCard({ project }) {
  return (
    <motion.article
      className="group flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/40 overflow-hidden hover:border-zinc-700 transition-colors"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-60px" }}
    >
      <div className="overflow-hidden border-b border-zinc-800">
        <img
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          className="w-full aspect-[16/9] object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
        />
      </div>

      <div className="flex flex-col flex-1 p-6 sm:p-8">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-display font-bold text-xl text-zinc-100 tracking-tight">
            {project.title}
          </h3>
          {!project.live && (
            <span className="font-mono text-[11px] text-zinc-400 px-2.5 py-1 rounded-full border border-zinc-700">
              In development
            </span>
          )}
        </div>

        <p className="text-sm leading-relaxed mb-6 flex-1">{project.description}</p>

        <ul className="flex flex-wrap gap-2 mb-6" aria-label="Technologies used">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="font-mono text-xs text-zinc-300 px-3 py-1.5 rounded-full border border-zinc-700"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-5 pt-4 border-t border-zinc-800">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-accent font-medium hover:text-accent-hover transition-colors"
            >
              <ExternalLink size={16} aria-hidden="true" />
              Live site
            </a>
          )}
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-zinc-300 font-medium hover:text-accent transition-colors"
          >
            <Github size={16} aria-hidden="true" />
            Code
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
