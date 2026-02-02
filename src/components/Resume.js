import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';

function Resume() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <motion.div
        className="max-w-4xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Header */}
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Resume
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Download my resume to learn more about my experience, skills, and professional background.
          </p>
        </motion.div>

        {/* Resume Preview Card */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8 border border-gray-200 hover:border-blue-400 transition-colors"
          variants={itemVariants}
          whileHover={{ boxShadow: "0 20px 60px rgba(59, 130, 246, 0.3)" }}
        >
          <div className="p-8 sm:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Vincent Mumo Resume</h3>
                <p className="text-gray-600">Full Stack Developer</p>
              </div>
            </div>

            <p className="text-gray-700 mb-8 leading-relaxed">
              Download my comprehensive resume showcasing my professional experience, technical skills, projects, and education. Get a detailed overview of my capabilities as a Full Stack Developer.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="/Resume- Vincent Mumo.pdf"
                download="Vincent_Mumo_Resume.pdf"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                <span>Download Resume</span>
              </motion.a>

              <motion.a
                href="https://github.com/Vinmumo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View GitHub</span>
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Key Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "React.js",
              "Flask",
              "JavaScript",
              "Python",
              "Tailwind CSS",
              "Firebase",
              "Node.js",
              "PostgreSQL",
            ].map((skill, idx) => (
              <motion.div
                key={idx}
                className="p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all text-center"
                whileHover={{ y: -3 }}
              >
                <p className="font-semibold text-gray-900">{skill}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Resume;
