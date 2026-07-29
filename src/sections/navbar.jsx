import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./styles/navbar.css";
import { FiDownload } from "react-icons/fi";
import resumePDF from "/Resume.pdf";
import Downloads from "/Downloads.svg";


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
  if (!section) return;

  // 1. Calculate the position of the section relative to the page
  const elementPosition = section.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.scrollY - 80; // Subtracts your 80px navbar height

  // 2. Use native window.scrollTo with smooth behavior
  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
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
        href="/Resume.pdf"
        download
        className="resume-btn"
      >
        <p className="text1 m-0">Resume</p>
        <img src={Downloads} className="resume-icon" />
      </a>

      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
