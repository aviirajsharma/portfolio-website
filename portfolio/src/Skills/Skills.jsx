import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: "Web Development",
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 95 },
        { name: "React", level: 60 },
        { name: "Node.js & Express.js", level: 85 }
      ]
    },
    {
      category: "Android Development",
      skills: [
        { name: "Kotlin", level: 85 },
        { name: "Jetpack Compose", level: 75 },
        { name: "Clean Architecture(MVVM)", level: 90 },
        { name: "RoomDatabase", level: 80 }
      ]
    },
    {
      category: "Other",
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "Canva", level: 70 },
        { name: "RESTful APIs", level: 80 },
        { name: "Performance Optimization", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2>My Skills</h2>
          <div className="underline"></div>
        </div>
        
        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category glass">
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;