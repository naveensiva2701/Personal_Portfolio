import React from 'react';
import "./Projects.css";
import startup_img from "../../assets/startup.jpg";
import calculator_img from "../../assets/calculator.jpg";
import todo_img from "../../assets/todo.jpg";
import rps_img from "../../assets/RPS.jpg";
import voicetotext_img from "../../assets/voicetotext.png";
import portfolio_img from "../../assets/portfolio.jpg";

const projects=[
    {
        title: "Startup Innovation and Funding Platform",
        img: startup_img,
        link: "https://github.com/naveensiva2701/fundrise-future-spark",
    },
    {
        title: "Calculator",
        img: calculator_img,
        link: "https://naveensiva2701.github.io/calculator/",
    },
    {
        title: "To-Do List",
        img: todo_img,
        link: "https://to-do-list-five-khaki-69.vercel.app/",
    },
    {
        title: "Portfolio",
        img: portfolio_img,
        link: "https://personal-portfolio-sal6.vercel.app/",
    },
    {
        title: "Rock-Paper-Scissor",
        img: rps_img,
        link: "https://naveensiva2701.github.io/Rock-Paper-Scissor/",
    },
    {
        title: "Voice to Text",
        img: voicetotext_img,
        link: "https://naveensiva2701.github.io/voice-to-text/",
    },
];

function Projects() {
  return (
    <section className='projects-section' id='projects'>
        <h2 className="projects-title">PROJECTS</h2>
        <div className="projects-grid">
            
            {projects.map((project,index)=>(
                <div className="project-card" key={index}>
                    <img src={project.img} alt={project.title} className="project-img" />
                    <h3 className="project-title">{project.title}</h3>

                    <button className="project-btn" 
                    onClick={()=> window.open(project.link, "_blank")}>
                    View Project</button>

                </div>
            ))}
        </div>
    </section>
  )
}

export default Projects;