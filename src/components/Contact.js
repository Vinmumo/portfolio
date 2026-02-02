import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ExternalLink } from "lucide-react";

function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "vinnymummo@gmail.com",
      link: "mailto:vinnymummo@gmail.com",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Vincent Mumo",
      link: "https://www.linkedin.com/in/vincent-mumo-940635252/",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "Vinmumo",
      link: "https://github.com/Vinmumo",
    },
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-white mb-4"
          variants={itemVariants}
        >
          Let's Connect
        </motion.h2>

        <motion.p
          className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          I'd love to hear from you! Whether you have an opportunity, question, or just want to chat about tech, feel free to reach out.
        </motion.p>

        {/* Contact Methods */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
        >
          {contactMethods.map((method, idx) => {
            const Icon = method.icon;
            return (
              <motion.a
                key={idx}
                href={method.link}
                target={method.link.startsWith("mailto") ? undefined : "_blank"}
                rel={method.link.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="group p-8 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:border-white/50 hover:bg-white/20 transition-all"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Icon className="w-8 h-8 text-blue-400 mb-4 mx-auto group-hover:text-purple-400 transition-colors" />
                <h3 className="text-white font-semibold mb-2">{method.title}</h3>
                <p className="text-gray-300 text-sm mb-3">{method.value}</p>
                <div className="flex items-center justify-center gap-2 text-blue-400 group-hover:text-purple-400 transition-colors">
                  <span className="text-sm font-medium">Connect</span>
                  <ExternalLink size={16} />
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Email CTA */}
        <motion.div variants={itemVariants}>
          <motion.a
            href="mailto:vinnymummo@gmail.com"
            className="inline-block px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-2xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Me an Email
          </motion.a>
        </motion.div>

        {/* Response time */}
        <motion.p
          className="mt-8 text-gray-400 text-sm"
          variants={itemVariants}
        >
          💬 I typically respond within 24 hours
        </motion.p>
      </motion.div>
    </section>
  );
}

export default Contact;
