import "./styles/footer.css";


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        {/* LEFT */}
        <div className="footer-left">
          <img src="/logo-white.svg" alt="Saneen Logo" className="footer-logo" />

          <p className="footer-role">
            Frontend Developer | UI/UX Designer
          </p>
        </div>

        

        {/* RIGHT */}
        <div className="footer-right">
          <ul className="footer-nav p-0">
            <li><a href="#home" className="links">Home</a></li>
            <li><a href="#about" className="links">About</a></li>
            <li><a href="#skills" className="links">Skills</a></li>
            <li><a href="#projects" className="links">Projects</a></li>
            <li><a href="#contact" className="links">Contact</a></li>
          </ul>
        </div>

      </div>

        {/* CENTER */}
        <div className="footer-center">
          <div className="footer-socials">
            <a href="https://www.linkedin.com/in/saneenmanzoor" target="_blank" rel="noreferrer">
              <img src="/icons/linkedin-white.svg" alt="LinkedIn" />
            </a>

            <a href="mailto:saneenmanzoor@gmail.com">
              <img src="/icons/email-white.svg" alt="Email" />
            </a>

            <a href="https://github.com/saneenmanzoor-pixel" target="_blank" rel="noreferrer">
              <img src="/icons/github.svg" alt="GitHub" />
            </a>

            <a href="https://www.behance.net/saneenmanzoor1" target="_blank" rel="noreferrer">
              <img src="/icons/behance.svg" alt="Behance" />
            </a>
          </div>
        </div>


      <div className="footer-bottom">
        © 2026 Saneen. All rights reserved.
      </div>
    </footer>
  );
}
