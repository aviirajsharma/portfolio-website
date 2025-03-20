import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2>About Me</h2>
          <div className="underline"></div>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p>
            I'm a passionate third-year B.Tech Computer Science student at ITM Gwalior with a strong
             interest in full-stack web development and Android app creation. My journey in tech began
              with exploring web technologies, and over time, I developed expertise in building dynamic
               websites using the MERN stack (MongoDB, Express.js, React.js, and Node.js).
            </p>
            <p>
            I also specialize in native Android development, leveraging Kotlin and Jetpack Compose to
             build modern, efficient, and user-friendly applications. My focus is on writing clean, scalable
              code and delivering seamless user experiences.
            </p>
            <p>
            When I'm not coding, I enjoy exploring the latest tech trends, contributing to open-source
             projects, and expanding my skills in cybersecurity and mobile app security. I'm committed to
              continuous learning and strive to stay updated with emerging technologies and best practices.
            </p>
          </div>
          
          <div className="about-info">
            <div className="info-item glass">
              <h3>Education</h3>
              <ul>
                <li>
                  <span className="degree">BTech in Computer Science</span>
                  <span className="university">Institute of Technology and Managament, Gwalior(M.P)</span>
                  <span className="year">2016-2020</span>
                </li>
                <li>
                  <span className="degree">Class-12th</span>
                  <span className="university">A.M.I Shishu Mandir</span>
                  <span className="year">2021-2022</span>
                </li>
                <li>
                  <span className="degree">Class-10th</span>
                  <span className="university">A.M.I Shishu Mandir</span>
                  <span className="year">2019-2020</span>
                </li>
              </ul>
            </div>
            
            <div className="info-item glass">
              <h3>Intership</h3>
              <ul>
                <li>
                  <span className="position">Web Full Stack Virtual Intership</span>
                  <span className="company">AICTE-Eduskills</span>
                  <span className="year">2024</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;