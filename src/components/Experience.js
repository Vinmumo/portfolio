import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { site, timeline } from "../data/site";
import SectionHeading from "./SectionHeading";

function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-900/30 border-y border-zinc-800/60">
      <div className="max-w-4xl mx-auto">
        <SectionHeading index="02" title="Experience & Education" />

        <ol className="relative border-l border-zinc-800 ml-2 sm:ml-4 space-y-12">
          {timeline.map((entry) => (
            <motion.li
              key={`${entry.title}-${entry.period}`}
              className="relative pl-8 sm:pl-10"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-60px" }}
            >
              {/* Marker */}
              <span
                className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-accent"
                aria-hidden="true"
              ></span>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-2">
                <span className="font-mono text-accent text-sm">{entry.period}</span>
                <span className="font-mono text-[11px] uppercase tracking-widest text-zinc-500 px-2 py-0.5 rounded-full border border-zinc-800">
                  {entry.kind}
                </span>
              </div>

              <h3 className="font-display font-bold text-xl text-zinc-100 tracking-tight">
                {entry.title}
              </h3>
              <p className="text-zinc-500 text-sm mb-3">{entry.org}</p>

              <ul className="space-y-1.5">
                {entry.points.map((point) => (
                  <li key={point} className="text-sm leading-relaxed flex gap-2">
                    <span className="text-accent mt-1" aria-hidden="true">▸</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ol>

        <motion.div
          className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-zinc-400">Want the full picture?</p>
          <a
            href={site.resume}
            download="Vincent-Mumo-Resume.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-accent border border-accent/40 rounded-md hover:bg-accent/10 hover:border-accent transition-colors"
          >
            <Download size={15} aria-hidden="true" />
            Download my resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
