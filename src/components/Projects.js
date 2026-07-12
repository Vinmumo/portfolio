import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { site, projects } from "../data/site";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

const featured = projects.find((p) => p.featured);
const rest = projects.filter((p) => !p.featured);

function Projects() {
  return (
    <section id="work" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeading index="01" title="Selected Work" />

        {/* Featured project */}
        {featured && (
          <motion.article
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-20 p-6 sm:p-10 rounded-2xl border border-zinc-800 bg-zinc-900/40"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <a
              href={featured.live || featured.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-xl border border-zinc-800"
              aria-label={`${featured.title} — open live site`}
            >
              <img
                src={featured.image}
                alt={`Screenshot of ${featured.title}`}
                className="w-full aspect-[4/3] object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
              />
            </a>

            <div>
              <p className="font-mono text-accent text-xs uppercase tracking-widest mb-3">
                Featured Project
              </p>
              <h3 className="font-display font-bold text-3xl text-zinc-100 tracking-tight mb-4">
                {featured.title}
              </h3>
              <p className="leading-relaxed mb-6">{featured.description}</p>

              <ul className="flex flex-wrap gap-2 mb-8" aria-label="Technologies used">
                {featured.stack.map((tech) => (
                  <li
                    key={tech}
                    className="font-mono text-xs text-zinc-300 px-3 py-1.5 rounded-full border border-zinc-700"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-5">
                {featured.live && (
                  <a
                    href={featured.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent font-medium hover:text-accent-hover transition-colors"
                  >
                    <ExternalLink size={17} aria-hidden="true" />
                    Live site
                  </a>
                )}
                <a
                  href={featured.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-zinc-300 font-medium hover:text-accent transition-colors"
                >
                  <Github size={17} aria-hidden="true" />
                  Code
                </a>
              </div>
            </div>
          </motion.article>
        )}

        {/* Other projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {rest.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 font-mono text-sm text-zinc-300 hover:text-accent transition-colors"
          >
            More on GitHub
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              aria-hidden="true"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
