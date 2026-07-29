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





function App() {
  useEffect(() => {
    // 1. Initialize Lenis
    const lenis = new Lenis({
      duration: 1.8,       // How long the scroll animation lasts (in seconds)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      infinite: false,
    });

    // 2. Setup the requestAnimationFrame loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // 3. Clean up the event listeners when component unmounts
    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    // Add this inside the useEffect loop in App.jsx if you use anchor links:
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          lenis.scrollTo(targetElement);
        }
      });
    });
  })

  return (
    <>
      <BrowserRouter>

        <Navbar />
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

        <Footer />


      </BrowserRouter>

    </>



  )
}

export default App
