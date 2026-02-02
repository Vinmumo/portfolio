import React, { useState } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#resume", label: "Resume" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.a
            href="/"
            className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            VM
          </motion.a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, idx) => (
              <motion.a
                key={idx}
                href={link.href}
                className="px-4 py-2 text-gray-700 font-medium rounded-lg hover:bg-gray-100 transition-all relative group"
                whileHover={{ scale: 1.05 }}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </div>

          {/* Desktop Social Icons */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.a
              href="https://github.com/Vinmumo"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-700 hover:text-blue-600 transition-colors"
              whileHover={{ scale: 1.2, rotate: 10 }}
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/vincent-mumo-940635252/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-700 hover:text-blue-600 transition-colors"
              whileHover={{ scale: 1.2, rotate: 10 }}
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="mailto:vinnymummo@gmail.com"
              className="p-2 text-gray-700 hover:text-blue-600 transition-colors"
              whileHover={{ scale: 1.2, rotate: 10 }}
            >
              <Mail size={20} />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="lg:hidden bg-white border-t border-gray-200"
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        style={{ overflow: "hidden" }}
      >
        <div className="px-4 sm:px-6 py-4 space-y-2">
          {navLinks.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.href}
              className="block px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all"
              onClick={() => setIsOpen(false)}
              whileHover={{ paddingLeft: 24 }}
            >
              {link.label}
            </motion.a>
          ))}
          <div className="flex items-center justify-center space-x-4 pt-4 border-t border-gray-200">
            <motion.a
              href="https://github.com/Vinmumo"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-700 hover:text-blue-600 transition-colors"
              whileHover={{ scale: 1.2 }}
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/vincent-mumo-940635252/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-700 hover:text-blue-600 transition-colors"
              whileHover={{ scale: 1.2 }}
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="mailto:vinnymummo@gmail.com"
              className="p-2 text-gray-700 hover:text-blue-600 transition-colors"
              whileHover={{ scale: 1.2 }}
            >
              <Mail size={20} />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </nav>
  );
}

export default Navbar;
