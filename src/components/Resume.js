import React from 'react';

function Resume() {
  return (
    <section id="resume" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Resume</h2>
        <p className="text-gray-600 mb-6">
          Download my resume or view it online:
        </p>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default Resume;
