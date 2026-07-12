import React from "react";
import { motion } from "framer-motion";
import { site } from "../data/site";
import SocialLinks from "./SocialLinks";

function Contact() {
  return (
    <section id="contact" className="py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <motion.p
          className="font-mono text-accent text-sm mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          03 — What's next?
        </motion.p>

        <motion.h2
          className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-zinc-100 tracking-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Let's build something<span className="text-accent">.</span>
        </motion.h2>

        <motion.p
          className="text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          I'm currently open to full-time roles, internships, and freelance
          projects. If you have an opportunity — or just want to talk shop —
          my inbox is open.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
        >
          <a
            href={`mailto:${site.email}`}
            className="inline-block px-8 py-4 bg-accent text-ink font-semibold rounded-md hover:bg-accent-hover transition-colors"
          >
            {site.email}
          </a>

          <div className="mt-8 flex justify-center">
            <SocialLinks size={22} />
          </div>

          <p className="mt-8 font-mono text-xs text-zinc-600">
            I typically respond within 24 hours.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
