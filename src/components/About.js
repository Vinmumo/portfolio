import React from "react";
import { motion } from "framer-motion";
import { Code2, Zap, Target } from "lucide-react";
import myPhoto from "../assets/images/profile.jpg";

function About() {
  const skills = [
    { icon: Code2, title: "Full Stack Development", desc: "React, Flask, Node.js" },
    { icon: Zap, title: "Fast & Efficient", desc: "Performance optimized" },
    { icon: Target, title: "Problem Solver", desc: "Creative solutions" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="about" className="min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 px-4 sm:px-6 lg:px-8 py-20 pt-32 relative">
      {/* Decorative elements */}
      <div className="absolute top-20 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <motion.div
        className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Profile Picture */}
        <motion.div
          className="flex justify-center md:justify-start"
          variants={itemVariants}
        >
          <motion.div
            className="relative group"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity -z-10"></div>
            <img
              src={myPhoto}
              alt="Vincent Mumo"
              className="rounded-full shadow-2xl w-50 h-50 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover border-4 border-white"
            />
          </motion.div>
        </motion.div>

        {/* Info */}
        <motion.div variants={itemVariants}>
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Vincent Mumo
          </motion.h1>

          <motion.p
            className="mt-4 text-lg sm:text-xl text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text font-semibold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Full Stack Developer • React • Flask • Tailwind
          </motion.p>

          <motion.p
            className="mt-6 text-base sm:text-lg text-gray-700 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            I'm a passionate developer with a strong background in web development, database management, and teamwork. I thrive on solving problems and creating elegant, efficient solutions that make a real impact. Whether it's building scalable applications or optimizing user experiences, I'm committed to excellence.
          </motion.p>

          {/* Skills */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {skills.map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={idx}
                  className="p-4 rounded-lg bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-blue-400 shadow-md hover:shadow-lg transition-all group"
                  whileHover={{ y: -5 }}
                >
                  <Icon className="w-6 h-6 text-blue-600 mb-2 group-hover:text-purple-600 transition-colors" />
                  <p className="font-semibold text-gray-900 text-sm">{skill.title}</p>
                  <p className="text-xs text-gray-600 mt-1">{skill.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.a
              href="#projects"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all text-center"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-all text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;
