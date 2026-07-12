import React from "react";
import { motion } from "framer-motion";

function SectionHeading({ index, title, className = "" }) {
  return (
    <motion.div
      className={`flex items-baseline gap-4 mb-12 sm:mb-16 ${className}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-80px" }}
    >
      <span className="font-mono text-accent text-sm sm:text-base" aria-hidden="true">
        {index}
      </span>
      <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-zinc-100 tracking-tight">
        {title}
      </h2>
      <span
        className="hidden sm:block flex-1 h-px bg-zinc-800 self-center translate-y-1"
        aria-hidden="true"
      ></span>
    </motion.div>
  );
}

export default SectionHeading;
