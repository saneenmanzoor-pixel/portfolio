import "./styles/skills.css";
import { motion } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
  scaleFade,
} from "./utils/animation";

// Frontend icons
import html from "/icons/html.svg";
import css from "/icons/css.svg";
import js from "/icons/js.svg";
import react from "/icons/react.svg";
import bootstrap from "/icons/boot.svg";

// Design tools
import figma from "/icons/figma.svg";
import xd from "/icons/xd.svg";

// Tools
import github from "/icons/github.svg";
import vscode from "/icons/vs.svg";

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <motion.div
        className="skills-card"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Title */}
        <motion.h2 variants={fadeUp} className="skills-title">
          Skills
          <span className="skills-underline"></span>
        </motion.h2>

        {/* Frontend */}
        <motion.div variants={fadeUp} className="skills-group">
          <h3>Frontend Technologies</h3>
          <motion.div
            className="skills-row"
            variants={staggerContainer}
          >
            <Skill icon={html} label="HTML5" />
            <Skill icon={css} label="CSS3" />
            <Skill icon={js} label="JavaScript" />
            <Skill icon={react} label="React.js" />
            <Skill icon={bootstrap} label="Bootstrap" />
          </motion.div>
        </motion.div>

        {/* Design */}
        <motion.div variants={fadeUp} className="skills-group">
          <h3>Design Tools</h3>
          <motion.div
            className="skills-row"
            variants={staggerContainer}
          >
            <Skill icon={figma} label="Figma" />
            <Skill icon={xd} label="Adobe XD" />
          </motion.div>
        </motion.div>

        {/* Tools */}
        <motion.div variants={fadeUp} className="skills-group2">
          <h3>Tools & Platforms</h3>
          <motion.div
            className="skills-row"
            variants={staggerContainer}
          >
            <Skill icon={github} label="GitHub" />
            <Skill icon={vscode} label="VS Code" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* Reusable Skill Pill (Animated) */
function Skill({ icon, label }) {
  return (
    <motion.div
      className="skill-pill"
      variants={scaleFade}
      whileHover={{ y: -4, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <img src={icon} alt={label} />
      <span className="txt">{label}</span>
    </motion.div>
  );
}
