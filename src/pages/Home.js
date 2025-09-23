import React from 'react';
import { Helmet } from 'react-helmet';


import About from '../components/About';
import Projects from '../components/Projects';
import Resume from '../components/Resume';
import Contact from '../components/Contact';

function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Vincent Mumo | Portfolio</title>
        <meta name="description" content="My portfolio showcasing my skills and projects." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

     

      <main>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="resume"><Resume /></section>
        <section id="contact"><Contact /></section>
      </main>

      
    </>
  );
}

export default Home;
