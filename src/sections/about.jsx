import "./styles/about.css";
import about from "/about.webp";
import { motion } from "framer-motion";
import { fadeLeft, fadeRight, fadeUp } from "./utils/animation";

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-card">

        {/* LEFT CONTENT */}
        <motion.div
          className="about-text"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.h2 variants={fadeUp} className="about-title">
            About Me
            <span className="title-underline"></span>
          </motion.h2>

          <motion.p variants={fadeUp} className="about-description">
            I’m a <strong className="str">Frontend Developer</strong> skilled in
            <strong className="str"> React JS, HTML, CSS, JavaScript and Bootstrap</strong>.
            I enjoy creating <strong className="str"> responsive UI</strong> and translating
            design concepts into <strong className="str"> real-world web applications</strong>
            using <strong className="str">modern frontend tools.</strong>
          </motion.p>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="about-image"
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <img src={about} alt="About" className="img" />
        </motion.div>

      </div>
    </section>
  );
}
