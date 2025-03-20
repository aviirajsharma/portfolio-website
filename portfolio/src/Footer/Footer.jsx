import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <a href="#home" className="logo">
              <span className="logo-text">Portfolio</span>
            </a>
            <p>Creating beautiful digital experiences through clean code and thoughtful design.</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Resources</h4>
              <ul>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Resume</a></li>
                <li><a href="#">Tools</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="copyright">
            &copy; {currentYear} Portfolio. All Rights Reserved.
          </div>
          <div className="credits">
            Designed & Built by Alex Johnson
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;