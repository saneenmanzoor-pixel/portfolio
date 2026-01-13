import { NavLink } from "react-router-dom";
import "./styles/contact.css";



import { motion } from "framer-motion";

export default function Contact() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="contact-section"
      id="contact"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div className="contact-card" variants={containerVariants}>
        {/* LEFT CONTENT */}
        <motion.div className="contact-left" variants={containerVariants}>
          <motion.h2 className="contact-title" variants={itemVariants}>
            Contact Me
            <span className="contact-underline"></span>
          </motion.h2>

          <motion.p className="contact-subtitle" variants={itemVariants}>
            Interested in working together? Let’s connect.
          </motion.p>

          <motion.div className="contact-links">
            <motion.div variants={itemVariants}>
              <NavLink
                to="mailto:saneenmanzoor@gmail.com"
                className="contact-link"
              >
                <img src="/icons/gmail.svg" alt="Email" />
                saneenmanzoor@gmail.com
              </NavLink>
            </motion.div>

            <motion.div variants={itemVariants}>
              <NavLink
                to="https://www.linkedin.com/in/saneenmanzoor"
                target="_blank"
                className="contact-link"
              >
                <img src="/icons/linkedin.svg" alt="LinkedIn" />
                /in/saneenmanzoor
              </NavLink>
            </motion.div>

            <motion.div variants={itemVariants}>
              <NavLink
                to="https://github.com/saneenmanzoor-pixel"
                target="_blank"
                className="contact-link"
              >
                <img src="/icons/github-dark.svg" alt="GitHub" />
                /saneenmanzoor-pixel
              </NavLink>
            </motion.div>

            <motion.div variants={itemVariants}>
              <NavLink
                to="https://www.behance.net/saneenmanzoor1"
                target="_blank"
                className="contact-link"
              >
                <img src="/icons/behance-logo.svg" alt="GitHub" />
                /saneenmanzoor1
              </NavLink>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="contact-right"
          variants={imageVariants}
        >
          <img
            src="/contact.png"
            alt="Contact Illustration"
            className="img"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
