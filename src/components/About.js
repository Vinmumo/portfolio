import React from 'react';
import myPhoto from '../assets/images/profile.jpg';

function About() {
  return (
    <section id="about" className="min-h-screen flex items-center bg-gray-50 px-6 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Profile Picture */}
        <div className="flex justify-center md:justify-start">
          <img
            src={myPhoto}
            alt="Vincent Mumo"
            className="rounded-full shadow-lg w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 object-cover"
          />

        </div>

        {/* Info */}
        <div>
          <h1 className="text-4xl font-bold text-gray-800">Vincent Mumo</h1>
          <p className="mt-2 text-lg text-blue-600">
            Full Stack Developer • React • Flask • Bootstrap
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            I am a passionate developer with a strong background in web development,
            database management, and teamwork. I thrive on solving problems and creating
            elegant, efficient solutions.
          </p>
          <a
            href="#projects"
            className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
