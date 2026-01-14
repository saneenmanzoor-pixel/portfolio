import "./styles/experience.css";
import company from "/icons/company.png";
import { motion } from "framer-motion";

export default function Experience() {
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

  return (
    <motion.section
      className="experience-section"
      id="experience"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div className="experience-card" variants={containerVariants}>
        {/* Title */}
        <motion.div className="exp" variants={itemVariants}>
        <div className="exp-title" variants={itemVariants}>
          Experience
          <span className="exp-underline"></span>
        </div>
        </motion.div>

        {/* Role + Company */}
        <motion.div className="exp-header" variants={itemVariants}>
          <h3 className="exp-role">
            Frontend Developer & UI/UX Designer Intern -
          </h3>

          <div className="exp-company">
            <img src={company} alt="Futura Labs" />
          </div>
          
        </motion.div>

        {/* Duration */}
        <motion.p className="exp-duration" variants={itemVariants}>
          2025 – Present
        </motion.p>

        {/* Description */}
        <motion.ul className="exp-list">
          {[
            "Designed user interfaces and user experiences using Figma and Adobe XD, focusing on usability and clean visual design",
            "Built responsive and interactive web interfaces using HTML, CSS, JavaScript, and React.js",
            "Developed real-world frontend projects including product listing applications and portfolio websites",
            "Ensured mobile-first and responsive design across different screen sizes",
            "Focused on clean layout, accessibility, and user-friendly design",
            "Built multiple frontend projects using modern web technologies",
          ].map((item, index) => (
            <motion.li key={index} variants={itemVariants}>
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.section>
  );
}
