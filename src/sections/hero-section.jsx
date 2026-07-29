import "./styles/hero-section.css";
import profile from "/profile.jpg"; /*[cite: 1] */
import { motion, useScroll, useTransform } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
  scaleIn,
} from "./utils/animation"; /*[cite: 1] */

export default function Hero() {
  // Track global page scroll. Lenis synchronizes perfectly with this.
const { scrollY } = useScroll();

// Maps cleanly over 0 to 500 pixels of scrolling distance
const bgScale = useTransform(scrollY, [0, 500], [1, 1.15]);
const bgOpacity = useTransform(scrollY, [0, 450], [1, 0]);
const bgBlur = useTransform(scrollY, [0, 400], ["blur(0px)", "blur(12px)"]);

const contentScale = useTransform(scrollY, [0, 450], [1, 0.9]);
const contentOpacity = useTransform(scrollY, [0, 350], [1, 0]);

  return (
    <div className="hero-scroll-container">
      <div className="hero-sticky-wrapper">
        {/* Animated Background Layer */}
        <motion.div 
          className="hero-bg-layer"
          style={{
            scale: bgScale,
            opacity: bgOpacity,
            filter: bgBlur,
          }}
        />

        <section id="home" className="hero">
          <motion.div
            className="hero-content"
            variants={staggerContainer} /*[cite: 1] */
            initial="hidden" /*[cite: 1] */
            animate="visible" /*[cite: 1] */
            viewport={{ once: false, amount: 0.3 }}
            style={{
              scale: contentScale,
              opacity: contentOpacity,
            }}
          >
            {/* Profile Image */}
            <motion.div className="profile-circle" variants={scaleIn}> {/*[cite: 1] */}
              <img src={profile} alt="Profile" /> {/*[cite: 1] */}
            </motion.div>

            {/* Title */}
            <motion.h1 variants={fadeUp} className="h1"> {/*[cite: 1] */}
              <span className="hero-title">Hi, I’m Saneen Manzoor</span> {/*[cite: 1] */}
            </motion.h1>

            {/* Subtitle */}
            <motion.p variants={fadeUp} className="h2"> {/*[cite: 1] */}
              <span className="hero-subtitle">Front End Developer</span> {/*[cite: 1] */}
            </motion.p>

            {/* Description */}
            <motion.p variants={fadeUp} className="h3"> {/*[cite: 1] */}
              <span className="hero-description">
                I build responsive and user-friendly web interfaces.
              </span> {/*[cite: 1] */}
            </motion.p>

            {/* CTA Button */}
            <motion.button
              variants={fadeUp} /*[cite: 1] */
              whileHover={{ y: -2 }} /*[cite: 1] */
              whileTap={{ scale: 0.96 }} /*[cite: 1] */
              className="hero-btn" /*[cite: 1] */
              onClick={() => {
                const section = document.getElementById("projects"); /*[cite: 1] */
                if (section && window.lenis) { /*[cite: 1] */
                  window.lenis.scrollTo(section, { /*[cite: 1] */
                    offset: -80, // navbar height
                  });
                }
              }}
            >
              <p className="text">View Projects</p> {/*[cite: 1] */}
            </motion.button>
          </motion.div>
        </section>
      </div>
    </div>
  );
}