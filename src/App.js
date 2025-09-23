import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Home from './pages/Home';
// import './assets/styles/custom.css';
// import { Navbar } from 'react-bootstrap';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
