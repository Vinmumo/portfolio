import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { site } from "../data/site";
import SocialLinks from "./SocialLinks";
import myPhoto from "../assets/images/profile.webp";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Single subtle glow, top-left */}
      <div
        className="absolute -top-40 -left-40 w-[32rem] h-[32rem] bg-accent/[0.06] rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      ></div>

      <motion.div
        className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-28 pb-16 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <div>
          <motion.p variants={item} className="font-mono text-accent text-sm mb-5">
            {site.role} — {site.location}
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-zinc-100 tracking-tight leading-[1.05]"
          >
            Vincent Mumo<span className="text-accent">.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 font-display text-2xl sm:text-3xl text-zinc-500 tracking-tight"
          >
            I build web apps end to end.
          </motion.p>

          <motion.p variants={item} className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed">
            React, Flask, and Laravel developer with a BSc. in Business Information
            Technology from JKUAT and Moringa School's software engineering
            certification. I've shipped escrow, e-commerce, and civic-reporting
            platforms — from database schema to deployed UI.
          </motion.p>

          <motion.div variants={item} className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/60">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-xs font-mono text-zinc-300">Open to opportunities</span>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-ink font-semibold rounded-md hover:bg-accent-hover transition-colors"
            >
              See my work
              <ArrowDown size={16} aria-hidden="true" />
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center justify-center px-6 py-3 text-zinc-100 font-medium border border-zinc-700 rounded-md hover:border-accent hover:text-accent transition-colors"
            >
              Get in touch
            </a>
            <SocialLinks className="sm:ml-2" />
          </motion.div>
        </div>

        {/* Portrait with offset accent frame */}
        <motion.div variants={item} className="justify-self-center lg:justify-self-end">
          <div className="relative group w-56 h-56 sm:w-72 sm:h-72">
            <div
              className="absolute inset-0 border-2 border-accent rounded-xl translate-x-4 translate-y-4 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"
              aria-hidden="true"
            ></div>
            <img
              src={myPhoto}
              alt="Portrait of Vincent Mumo"
              width="480"
              height="480"
              className="relative w-full h-full object-cover rounded-xl border border-zinc-800 grayscale group-hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
