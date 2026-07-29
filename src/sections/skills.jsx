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
import motions from "/icons/motion.svg";
import tailwind from "/icons/tailwind.svg";

// AI
import claude from "/icons/claude.svg";
import antigravity from "/icons/antigravity.svg";
import cursor from "/icons/cursor.svg";

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
        viewport={{ once: false, amount: 0.3 }}
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
            <Skill icon={react} label="React.js" />
            <Skill icon={html} label="HTML5" />
            <Skill icon={css} label="CSS3" />
            <Skill icon={js} label="JavaScript" />
            <Skill icon={bootstrap} label="Bootstrap" />
            <Skill icon={motions} label="Motion" />
            <Skill icon={tailwind} label="Tailwind CSS" />
          </motion.div>
        </motion.div>

        {/* AI */}
        <motion.div variants={fadeUp} className="skills-group">
          <h3>AI Tools</h3>
          <motion.div
            className="skills-row"
            variants={staggerContainer}
          >
            <Skill icon={claude} label="Claude" />
            <Skill icon={antigravity} label="Antigravity" />
            <Skill icon={cursor} label="Cursor" />
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
