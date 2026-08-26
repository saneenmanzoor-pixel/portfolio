import "./styles/hero-section.css";
import profile from "/profile.webp";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
  scaleIn,
} from "./utils/animation";

export default function Hero() {
  // Track global page scroll — Lenis syncs with this via window scroll events
  const { scrollY } = useScroll();

  // Parallax: maps 0–500px scroll to scale/opacity/blur values
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
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            viewport={{ once: false, amount: 0.3 }}
            style={{
              scale: contentScale,
              opacity: contentOpacity,
            }}
          >
            {/* Profile Image */}
            <motion.div className="profile-circle" variants={scaleIn}>
              {/* LCP image: fetchpriority=high loads this before other assets.
                  width/height prevent CLS by reserving layout space. */}
              <img
                src={profile}
                alt="Saneen Manzoor – Frontend Developer"
                width={320}
                height={320}
                fetchpriority="high"
                decoding="async"
              />
            </motion.div>

            {/* Title */}
            <motion.h1 variants={fadeUp} className="h1">
              <span className="hero-title">Hi, I'm Saneen Manzoor</span>
            </motion.h1>

            {/* Subtitle — hero-lead class avoids semantic .h2 confusion on a <p> */}
            <motion.p variants={fadeUp} className="hero-lead">
              <span className="hero-subtitle">Front End Developer</span>
            </motion.p>

            {/* Description */}
            <motion.p variants={fadeUp} className="hero-body">
              <span className="hero-description">
                I build responsive and user-friendly web interfaces.
              </span>
            </motion.p>

            {/* CTA Button — uses window.lenis (set in App.jsx) with native scroll fallback */}
            <motion.button
              variants={fadeUp}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="hero-btn"
              onClick={() => {
                const section = document.getElementById("projects");
                if (!section) return;
                if (window.lenis) {
                  window.lenis.scrollTo(section, { offset: -80 });
                } else {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <p className="text">View Projects</p>
            </motion.button>
          </motion.div>
        </section>
      </div>
    </div>
  );
}