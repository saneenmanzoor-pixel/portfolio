import Navbar from './sections/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter} from "react-router-dom";
import { useEffect } from 'react'
import './App.css';
import Hero from './sections/hero-section';
import About from './sections/about';
import Skills from './sections/skills';
import Projects from './sections/projects';
// import ScrollToSection from './sections/scrollToSection';
import LenisProvider from "./components/LenisProvider";
import Experience from './sections/experience';
import Contact from './sections/contact';
import Footer from './sections/footer';






function App() {

  

  return (
    <>
      <BrowserRouter>
      <LenisProvider>
        <Navbar />
        {/* <ScrollToSection /> */}
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

        </LenisProvider>
      </BrowserRouter>

    </>
  
  
    
  )
}

export default App
