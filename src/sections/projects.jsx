import "./styles/projects.css";
import project1 from "/projects/eventx.jpg";
import project2 from "/projects/shoperkart.jpg";
import project3 from "/projects/dashboard.jpg";
import project4 from "/projects/growup.jpg";
import project5 from "/projects/toyland.jpg";
import project6 from "/projects/emarald.jpg";
import project7 from "/projects/eclat.jpg";
import project8 from "/projects/brewlett.jpg";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";




export default function Projects() {

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

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};


  return (
    <motion.section
  className="projects-section"
  id="projects"
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
>

      <div className="projects-container">

        {/* Headings */}
        <h2 className="projects-title">
          Projects
          <span className="projects-underline"></span>
        </h2>
        <p className="projects-subtitle">Development</p>

        {/* Projects Grid */}
        <div className="projects-grid">

          {/* Project 1 */}
          <motion.div variants={cardVariants} className="card">
            <NavLink to="/projects/shopkart" className="project-card light">
              <img
                src={project1}
                alt="Event Management Website"
                className="project-image"
              />
            </NavLink>
          </motion.div>
         



          {/* Project 2 */}
          <motion.div variants={cardVariants} className="card">
          <NavLink
            to=""
            className="project-card light">
            <img
              src={project2}
              alt="Shopkart E-commerce Website"
              className="project-image"
            />
          </NavLink>
          </motion.div>

        </div>
        <p className="projects-subtitle2">Design</p>

        {/* Projects Grid */}
        <div className="projects-grid">

        
          {/* Project 3 */}
          <motion.div variants={cardVariants} className="card">
          <NavLink
            to="/projects/dashboard"
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
            to="/projects/toyland"
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
            to="/projects/emarald"
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
            to="/projects/eclat"
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

        </div>
      </div>
    </motion.section>

  );
}
