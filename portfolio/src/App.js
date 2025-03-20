
import React, { useState, useEffect } from 'react';
import './App.css';

// Import components
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  
  // Function to handle intersection observer for scroll spy
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.5 });
    
    sections.forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="app">
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;