import "./styles/projects.css";
import project1 from "/projects/aether.webp";
import project2 from "/projects/pulse.webp";
import project3 from "/projects/dashboard.webp";
import project4 from "/projects/growup.webp";
import project5 from "/projects/toyland.webp";
import project6 from "/projects/emarald.webp";
import project7 from "/projects/eclat.webp";
import project8 from "/projects/brewlett.webp";
import project9 from "/projects/sneak.webp";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "./utils/animation";
import { Link } from "lucide-react";
import { BiLogoGithub } from "react-icons/bi";



export default function Projects() {


  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };


  return (
    <div
      className="projects-section">

      <section className="projects-container" id="projects">

        {/* Headings */}
        <motion.h2 className="projects-title"
          variants={fadeUp} initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          Projects
          <span className="projects-underline"></span>
        </motion.h2>
        <motion.p className="projects-subtitle" variants={fadeUp}
        initial="hidden" whileInView="visible"
        >Front End</motion.p>

        {/* Projects Grid */}
        <motion.section className="projects-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}>

          {/* Project 1 */}
          <motion.div variants={cardVariants} className="card">
            <NavLink to="https://aether-travel-booking-web-v2.vercel.app" className="project-card light">
              <img
                src={project1}
                alt="Aether Travel Booking"
                className="project-image"
              />
            </NavLink>
          </motion.div>




          {/* Project 2 */}
          <motion.div variants={cardVariants} className="card">
            <NavLink
              to="https://pulse-dashboard-khaki.vercel.app"
              className="project-card light">
              <img
                src={project2}
                alt="Pulse Dashboard"
                className="project-image"
              />
            </NavLink>
          </motion.div>

          <motion.div variants={cardVariants} className="card">
            <NavLink
              to="https://github.com/saneenmanzoor-pixel/sneak-studio"
              className="project-card light">
              <img
                src={project9}
                alt="Sneak Studio"
                className="project-image"
              />
            </NavLink>
          </motion.div>

        </motion.section>
        <motion.p className="projects-subtitle2"
          variants={fadeUp} initial="hidden" whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >UI/UX</motion.p>

        {/* Projects Grid */}
        <motion.section className="projects-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}>


          {/* Project 3 */}
          <motion.div variants={cardVariants} className="card">
            <NavLink
              to="https://www.behance.net/gallery/242354045/App-Dashboard-UIUX-Design"
              className="project-card light">
              <img
                src={project3}
                alt="Dashboard"
                className="project-image"
              />
            </NavLink>
          </motion.div>

          {/* Project 4 */}
          <motion.div variants={cardVariants} className="card">
            <NavLink
              to="https://www.behance.net/gallery/242249323/Parenting-App-Case-Study-UIUX-Design"
              className="project-card light">
              <img
                src={project4}
                alt="GrowUp Parenting-app"
                className="project-image"
              />
            </NavLink>
          </motion.div>


          {/* Project 5 */}
          <motion.div variants={cardVariants} className="card">
            <NavLink
              to="https://www.behance.net/gallery/242563267/Toys-Ecommerce-Website-UIUX-Design"
              className="project-card light">
              <img
                src={project5}
                alt="Toys E-commerce Website"
                className="project-image"
              />
            </NavLink>
          </motion.div>

          {/* Project 6 */}
          <motion.div variants={cardVariants} className="card">
            <NavLink
              to="https://www.behance.net/gallery/250582927/Ecommerce-App-Case-Study-UIUX-Design-Figma"
              className="project-card light">
              <img
                src={project6}
                alt="Tea E-commerce Website"
                className="project-image"
              />
            </NavLink>
          </motion.div>


          {/* Project 7 */}
          <motion.div variants={cardVariants} className="card">
            <NavLink
              to="https://www.behance.net/gallery/250636697/Fragrance-Ecommerce-Website-Case-Study-UIUX-Design"
              className="project-card light">
              <img
                src={project7}
                alt="Perfume E-commerce Website"
                className="project-image"
              />
            </NavLink>
          </motion.div>


          {/* Project 8 */}
          <motion.div variants={cardVariants} className="card">
            <NavLink
              to="/projects/brewlett"
              className="project-card light">
              <img
                src={project8}
                alt="Coffee E-commerce Website"
                className="project-image"
              />
            </NavLink>
          </motion.div>

        </motion.section>
      </section>
    </div>

  );
}
