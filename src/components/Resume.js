import React from 'react';

function Resume() {
  return (
    <div className="container mt-5">
      <h2>Resume</h2>
      <p><strong>Education:</strong> BSc. Computer Science – JKUAT</p>
      <p><strong>Skills:</strong> React, Flask, Python, JavaScript, Bootstrap, Git</p>
      <p><strong>Experience:</strong></p>
      <ul>
        <li>Intern – Software Developer, XYZ Tech (2023)</li>
        <li>Freelance Web Developer (2024–present)</li>
      </ul>
      <a className="btn btn-outline-primary" href="/resume.pdf" download>Download Resume</a>
    </div>
  );
}

export default Resume;
