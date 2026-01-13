import "./styles/hero-section.css";
import profile from "/profile.jpg";
import { motion } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
  scaleIn,
} from "./utils/animation";



export default function Hero() {
  return (
    <section id="home" className="hero">
      <motion.div
        className="hero-content"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image */}
        <motion.div
          className="profile-circle"
          variants={scaleIn}
        >
          <img src={profile} alt="Profile" />
        </motion.div>

        {/* Title */}
        <motion.h1 variants={fadeUp} className="h1">
          <span className="hero-title">
            Hi, I’m Saneen Manzoor
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p variants={fadeUp} className="h2">
          <span className="hero-subtitle">
            Junior Frontend Developer
          </span>
        </motion.p>

        {/* Description */}
        <motion.p variants={fadeUp} className="h3">
          <span className="hero-description">
            I build responsive and user-friendly web interfaces.
          </span>
        </motion.p>

        {/* CTA Button */}
        <motion.button 
          variants={fadeUp}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.96 }}
          className="hero-btn"
        onClick={() => {
            const section = document.getElementById("projects");
            if (section && window.lenis) {
              window.lenis.scrollTo(section, {
                offset: -80,  // navbar height
              });
            }
          }}
        >
          <p className="text">View Projects</p>
        </motion.button>
      </motion.div>
    </section>
  );
}
