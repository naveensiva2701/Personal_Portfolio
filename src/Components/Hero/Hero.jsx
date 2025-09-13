import React from "react";
import "./Hero.css"; 
import profile_img from '../../assets/home1.jpg';

const Hero = () => {


  return (
    <div className="hero" id="home">
      <img src={profile_img} alt="background" className="hero-bg" />
      <div className="hero-content">
        <h1>Hi, This is S. Naveenkumar <span className="highlight">..!</span></h1>
        <p>I am a <span className="highlight">Software Developer</span></p>
           
           <button
  className="resume-btn"
  onClick={() => window.open("https://drive.google.com/file/d/1i9MOx4f8HlPk6s0a3JG8drC_fTUxamAk/view?usp=drive_link", "_blank")}
            >
  Check My Resume
          </button>


      </div>
    </div>
  );
};

export default Hero;
