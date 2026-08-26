import Navbar from './sections/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import { useEffect } from 'react'
import './App.css';
import Hero from './sections/hero-section';
import About from './sections/about';
import Skills from './sections/skills';
import Projects from './sections/projects';
import Experience from './sections/experience';
import Contact from './sections/contact';
import Footer from './sections/footer';
import Lenis from 'lenis';
// SEO: head tag manager and structured data — mounted at app root
import SEO from './components/SEO';
import JsonLd from './components/JsonLd';

function App() {
  useEffect(() => {
    // 1. Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      infinite: false,
    });

    // 2. Expose globally so child components (e.g. hero CTA) can call lenis.scrollTo()
    window.lenis = lenis;

    // 3. RAF loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);

    // 4. Anchor link handler — registered once, cleaned up on unmount
    const anchors = document.querySelectorAll('a[href^="#"]');
    const handleAnchor = (e) => {
      e.preventDefault();
      const target = document.querySelector(e.currentTarget.getAttribute('href'));
      if (target) lenis.scrollTo(target);
    };
    anchors.forEach((a) => a.addEventListener('click', handleAnchor));

    // 5. Cleanup everything on unmount
    return () => {
      cancelAnimationFrame(rafId);
      anchors.forEach((a) => a.removeEventListener('click', handleAnchor));
      lenis.destroy();
      window.lenis = null;
    };
  }, []); // ← empty deps: runs once on mount, cleans up on unmount

  return (
    <>
      {/* SEO: inject <title>, meta, OG, Twitter Card, and JSON-LD into <head> */}
      <SEO />
      <JsonLd />

      <BrowserRouter>
        {/* Skip navigation — allows keyboard users to jump past the navbar */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <Navbar />

        <main id="main-content">
          <section id="home">
            <Hero />
          </section>

          <section id="about">
            <About />
          </section>

          <section id="skills">
            <Skills />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="experience">
            <Experience />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </main>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
