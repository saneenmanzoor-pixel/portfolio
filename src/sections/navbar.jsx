import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./styles/navbar.css";
import { FiDownload } from "react-icons/fi";
import resumePDF from "/Resume.pdf";


/* KEEP THIS */
const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skill", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

function NavScrollExample() {
  const indicatorRef = useRef(null);

  const moveIndicator = (e) => {
    const link = e.currentTarget;
    const { offsetLeft, offsetWidth } = link;

    const indicator = indicatorRef.current;
    indicator.style.opacity = "1";
    indicator.style.transform = `translateX(${offsetLeft}px) scale(1)`;
    indicator.style.width = `${offsetWidth}px`;
  };

  const hideIndicator = () => {
    const indicator = indicatorRef.current;
    indicator.style.opacity = "0";
    indicator.style.transform = "scale(0.95)";
  };

  /* ✅ ADD THIS FUNCTION */
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (!section || !window.lenis) return;

    window.lenis.scrollTo(section, {
      offset: -80, // navbar height
    });
  };

  return (
    <Navbar expand="lg" className="px-lg-5 main fixed-top">
      <Container fluid className="px-4">
        <Navbar.Brand href="#">
          <img src="/logo.svg" alt="Logo" />
        </Navbar.Brand>

        <Navbar.Collapse className="justify-content-center">
          <Nav className="linkss" onMouseLeave={hideIndicator}>
            <span ref={indicatorRef} className="nav-indicator" />

            {navItems.map(({ label, id }) => (
              <Nav.Link
                key={label}
                className="link px-4"
                onMouseEnter={moveIndicator}
                onClick={() => handleScroll(id)}   // 👈 LENIS HERE
              >
                {label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>

        
      <a
        href="/resume.pdf"
        download
        className="resume-btn"
      >
        <p className="text1 m-0">Resume</p>
        <FiDownload className="resume-icon" />
      </a>

      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
