import React from 'react';
import myPhoto from '../assets/images/profile.jpg';


function About() {
  return (
    <div className="container text-center mt-5">
      <img src={myPhoto} alt="Vincent Mumo" className="rounded-circle mb-3" width="150" />
      <h1>Vincent Mumo</h1>
      <p className="lead">Full Stack Developer | React | Flask | TailwindCSS</p>
      <p>
        I am a passionate developer with a strong background in web development, database management, and teamwork. 
        I thrive on solving problems and creating elegant, efficient solutions.
      </p>
    </div>
  );
}

export default About;
