import { useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./styles/navbar.css";
import Downloads from "/Downloads.svg";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

function NavScrollExample() {
  const indicatorRef = useRef(null);
  const [expanded, setExpanded] = useState(false);

  const moveIndicator = (e) => {
    const link = e.currentTarget;
    const { offsetLeft, offsetWidth } = link;
    const indicator = indicatorRef.current;
    if (!indicator) return;
    indicator.style.opacity = "1";
    indicator.style.transform = `translateX(${offsetLeft}px) scale(1)`;
    indicator.style.width = `${offsetWidth}px`;
  };

  const hideIndicator = () => {
    const indicator = indicatorRef.current;
    if (!indicator) return;
    indicator.style.opacity = "0";
    indicator.style.transform = "scale(0.95)";
  };

  const handleScroll = (id) => {
    // Close mobile menu first
    setExpanded(false);

    const section = document.getElementById(id);
    if (!section) return;

    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - 80;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <Navbar
      expand="lg"
      className="px-lg-5 main fixed-top"
      expanded={expanded}
      onToggle={setExpanded}
    >
      <Container fluid className="px-4">
        <Navbar.Brand href="/" aria-label="Saneen Manzoor — Home">
          <img src="/logo.svg" alt="Saneen Manzoor logo" />
        </Navbar.Brand>

        {/* Hamburger toggle — visible only on mobile (<992px) */}
        <Navbar.Toggle
          aria-controls="main-nav"
          aria-label="Toggle navigation menu"
          className="custom-toggle"
        >
          {/* Custom icon: three centered lines of decreasing width */}
          <svg
            width="22"
            height="18"
            viewBox="0 0 22 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect x="0" y="0" width="22" height="2.5" rx="1.25" fill="#111" />
            <rect x="3" y="7.75" width="16" height="2.5" rx="1.25" fill="#111" />
            <rect x="6" y="15.5" width="10" height="2.5" rx="1.25" fill="#111" />
          </svg>
        </Navbar.Toggle>

        <Navbar.Collapse id="main-nav" className="justify-content-center">
          <Nav className="linkss" onMouseLeave={hideIndicator}>
            <span ref={indicatorRef} className="nav-indicator" aria-hidden="true" />

            {navItems.map(({ label, id }) => (
              <Nav.Link
                key={label}
                className="link px-4"
                onMouseEnter={moveIndicator}
                onClick={() => handleScroll(id)}
              >
                {label}
              </Nav.Link>
            ))}
          </Nav>

          {/* Resume button — inside collapse so it appears in the mobile overlay */}
          <a
            href="/Resume.pdf"
            download
            className="resume-btn mobile-resume-btn"
            aria-label="Download Resume PDF"
          >
            <p className="text1 m-0">Resume</p>
            <img src={Downloads} className="resume-icon" alt="" aria-hidden="true" />
          </a>
        </Navbar.Collapse>

        {/* Desktop-only resume button — hidden on mobile */}
        <a
          href="/Resume.pdf"
          download
          className="resume-btn d-none d-lg-flex"
          aria-label="Download Resume PDF"
        >
          <p className="text1 m-0">Resume</p>
          <img src={Downloads} className="resume-icon" alt="" aria-hidden="true" />
        </a>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
