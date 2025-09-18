import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p className="text-gray-600 mb-8">
          I'd love to connect! Feel free to reach out:
        </p>

        <div className="space-y-4">
          <p>Email: <a href="mailto:vincent@example.com" className="text-blue-600 hover:underline">vincent@example.com</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/vincentmumo" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">vincentmumo</a></p>
          <p>GitHub: <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">yourgithub</a></p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
