import React from 'react';
import './Hero.css';
import profile from '../assets/images/AviProfile.jpg';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="animate-fadeIn">
            Hi, I'm <span className="highlight">Aviraj Sharma</span>
          </h1>
          <h2 className="subtitle animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            Web & App Developer
          </h2>
          <p className="bio animate-fadeIn" style={{ animationDelay: '0.4s' }}>
          I'm a web and app developer passionate about building sleek and functional digital experiences.
          Skilled in creating responsive websites and robust mobile apps with modern technologies.
          Always exploring new tools and frameworks to enhance performance and user experience.
          </p>
          <div className="hero-buttons animate-fadeIn" style={{ animationDelay: '0.6s' }}>
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
        <div className="hero-image animate-fadeIn" style={{ animationDelay: '0.3s' }}>
          <div className="image-container glass">
            <div className="profile-img">
              <img src={profile} alt="Profile" />
              <img src="/api/placeholder/400/400" alt="Profile" />
            </div>
          </div>
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
        </div>
      </div>
      <div className="scroll-down">
        <a href="#about">
          <span></span>
        </a>
      </div>
    </section>
  );
};

export default Hero;