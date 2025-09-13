import { FaLinkedinIn, FaInstagram, FaGithub, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="contact-title">CONTACT ME</h2>

      <div className="contact-icons">
        <a href="https://www.linkedin.com/in/naveenkumar-s-an2701/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
        <a href="https://github.com/naveensiva2701" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="mailto:naveensiva2701@gmail.com"><FaEnvelope /></a>
        <a href="https://www.google.com/maps/place/J9JJ%2B68C,+Valappandal,+Tamil+Nadu/@12.6305625,79.3807656,17z/data=!4m13!1m7!3m6!1s0x3a52d52cc751521b:0xd455fd7222281525!2sJ9JJ%2B68C,+Valappandal,+Tamil+Nadu!3b1!8m2!3d12.6305625!4d79.3807656!3m4!1s0x3a52d52cc751521b:0xd455fd7222281525!8m2!3d12.6305625!4d79.3807656?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer"><FaMapMarkerAlt /></a>
      </div>

      <div className="footer-links">
        <p ><AnchorLink href="#home" offset={70} className="footer-link">Home</AnchorLink></p>
        <p><AnchorLink href="#about" offset={50} className="footer-link">About</AnchorLink></p>
        <p><AnchorLink href="#skills" offset={70} className="footer-link">Skills</AnchorLink></p>
        <p ><AnchorLink href="#projects" offset={68} className="footer-link">Projects</AnchorLink></p>
      </div>

      <p className="footer-text">&copy; 2025 Naveen Copyright | All Rights Reserved</p>

      {/* Waves */}
      <div className="wave-container" aria-hidden="true">
        <div className="wave layer1" />
        <div className="wave layer2" />
        <div className="wave layer3" />
      </div>
    </section>
  );
}
