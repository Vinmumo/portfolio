import React, { useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { site, navLinks } from "../data/site";
import SocialLinks from "./SocialLinks";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ink/85 backdrop-blur-md border-b border-zinc-800">
      <nav
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#top"
          className="font-display font-bold text-xl text-zinc-100 tracking-tight"
        >
          VM<span className="text-accent">.</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link, idx) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              <span className="font-mono text-accent text-xs mr-1.5" aria-hidden="true">
                0{idx + 1}.
              </span>
              {link.label}
            </a>
          ))}
          <a
            href={site.resume}
            download="Vincent-Mumo-Resume.pdf"
            className="ml-4 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-accent border border-accent/40 rounded-md hover:bg-accent/10 hover:border-accent transition-colors"
          >
            <Download size={15} aria-hidden="true" />
            Resume
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-zinc-300 hover:text-accent rounded-md transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            className="md:hidden bg-ink border-b border-zinc-800 overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="px-4 sm:px-6 py-4 space-y-1">
              {navLinks.map((link, idx) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-3 text-zinc-300 hover:text-accent rounded-md hover:bg-zinc-900 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="font-mono text-accent text-xs mr-2" aria-hidden="true">
                    0{idx + 1}.
                  </span>
                  {link.label}
                </a>
              ))}
              <a
                href={site.resume}
                download="Vincent-Mumo-Resume.pdf"
                className="flex items-center gap-2 px-3 py-3 text-accent font-medium rounded-md hover:bg-zinc-900 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Download size={16} aria-hidden="true" />
                Download Resume
              </a>
              <div className="pt-3 border-t border-zinc-800">
                <SocialLinks />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
