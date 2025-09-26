import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#about" className="text-2xl font-bold text-gray-800">
          Vincent Mumo
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="hover:text-blue-600 transition">About</a>
          <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
          <a href="#resume" className="hover:text-blue-600 transition">Resume</a>
          <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-100 px-6 py-4 space-y-4 animate-slideDown">
          <a href="#about" className="block hover:text-blue-600">About</a>
          <a href="#projects" className="block hover:text-blue-600">Projects</a>
          <a href="#resume" className="block hover:text-blue-600">Resume</a>
          <a href="#contact" className="block hover:text-blue-600">Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
