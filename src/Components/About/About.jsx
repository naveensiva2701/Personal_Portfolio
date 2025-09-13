import React from "react";
import "./About.css";
import profile_img from "../../assets/profile.png";

const About = () => {
  return (
    <section id="about">
      <div className="circle">
        <img src={profile_img} alt="profile" />

        {/* Heading visible at first */}
        <div className="h">
          <h2>ABOUT ME</h2>
        </div>

        {/* Content revealed on hover */}
        <div className="content">
          <h2>ABOUT ME</h2>
          <p>
            Hi, I'm S. Naveenkumar, a front-end developer with a passion for
            creating user-friendly and visually appealing websites. I am pursuing
            a degree in MCA from Thanthai Periyar Government Institute of Technology-Vellore.
            I developed my skills in HTML, CSS, JavaScript, MySql, MongoDB and framework React.
          </p><br/>
          <p>
            I'm eager to bring my creativity and technical skills to dynamic
            teams and work on exciting projects. Check out my portfolio to see
            my work, and feel free to contact me for collaboration!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
