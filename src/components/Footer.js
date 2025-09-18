import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-100 py-6 mt-10 text-center text-gray-500 text-sm">
      &copy; {new Date().getFullYear()} Vincent Mumo. All rights reserved.
    </footer>
  );
}

export default Footer;
