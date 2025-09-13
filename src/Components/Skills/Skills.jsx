import React, { useEffect, useState, useRef } from "react";
import "./Skills.css";
import {FaHtml5,FaCss3Alt, FaJs, FaReact, FaGithub } from "react-icons/fa";
import { SiMongodb, SiMysql, SiFigma } from "react-icons/si";

const skills = [
   { name: "HTML", level: 98, color: "#e44d26", icon: <FaHtml5 color="#e44d26" /> },
  { name: "CSS", level: 95, color: "#264de4", icon: <FaCss3Alt color="#264de4" /> },
  { name: "JavaScript", level: 85, color: "#ceb302ff", icon: <FaJs color="#f0db4f" /> },
  { name: "React JS", level: 90, color: "#00758f", icon: <FaReact color="#61DBFB" /> },
  { name: "MySQL", level: 80, color: "#563d7c", icon: <SiMysql color="#4479A1" /> },
  { name: "MongoDB", level: 80, color: "#009c3cff", icon: <SiMongodb color="#47A248" /> },
  { name: "GitHub", level: 85, color: "#7a7e81ff", icon: <FaGithub color="#181717" /> },
  { name: "Figma", level: 70, color: "#f25022", icon: <SiFigma color="#F24E1E" /> },
];


export default function Skills() {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true);   // trigger animation when section is visible
            observer.unobserve(entry.target); // run only once
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section className="skills-section" ref={sectionRef} id="skills">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-header">
              <span className="skill-icon">{skill.icon}</span>
              <span className="skill-name">{skill.name}</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: animate ? `${skill.level}%` : "0%",
                  backgroundColor: skill.color,
              }}
              >
                <span className="progress-text">{skill.level}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


