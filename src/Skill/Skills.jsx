import React from "react";
import { useState } from "react";
import "./Skill.css";

function Skills(){
  const [hoveredSkill, setHoveredSkill] = useState(null);
  
  const skillCategories = [
    {
      category: "Languages",
      skills: ["JavaScript (ES6+)", "HTML5", "CSS3", "MySQL"]
    },
    {
      category: "FrameWorks & Libraries",
      skills: ["React.Js", "BootStrap", "WordPress", "WebFlow"]
    },
    {
      category: "Tools",
      skills: ["Git", "GitHub", "Canva", "VS Code", "ChatGPT (AI-Assisted Development)"]
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="sectionTitle">Skills & Technologies</h2>
        <div className="skillsGrid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skillCategory">
              <h3 className="categoryTitle">{category.category}</h3>
              <div className="skillsList">
                {category.skills.map((skill, idx) => (
                  <span 
                    className="skillTag"
                    key={idx} 
                    style={{
                      transform: hoveredSkill === `${index}-${idx}` ? 'scale(1.1)' : 'scale(1)',
                      boxShadow: hoveredSkill === `${index}-${idx}` 
                        ? '0 6px 20px rgba(139, 92, 246, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.3)' 
                        : '0 4px 15px rgba(139, 92, 246, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                    }}
                    onMouseEnter={() => setHoveredSkill(`${index}-${idx}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    {skill}
                  </span>
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
