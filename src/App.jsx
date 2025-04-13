import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills'; // ✅ Import your Skills component
import Projects from './components/Projects';
import CodingProfiles from './components/CodingProfiles';
import Qualification from './components/Qualification'; // adjust path
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills /> {/* ✅ Add Skills here */}
      <Projects />
      <CodingProfiles />
      <Qualification/>
      <Contact/>
      <Footer/>

    </>
  );
}

export default App;
