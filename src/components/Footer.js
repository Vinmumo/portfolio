import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()} Vincent Mumo. All rights reserved.</p>
        <div className="space-x-4 mt-4 md:mt-0">
          <a href="https://github.com/Vinmumo" className="hover:text-white">GitHub</a>
          <a href="https://linkedin.com/in/vincentmumo" className="hover:text-white">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
