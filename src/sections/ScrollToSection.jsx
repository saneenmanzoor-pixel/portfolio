import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { springScrollTo } from "./utils/springScroll";

export default function ScrollToSection() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const section = document.querySelector(hash);
    if (!section) return;

    const prefersReducedMotion =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    setTimeout(() => {
      if (prefersReducedMotion) {
        section.scrollIntoView();
      } else {
        springScrollTo(section);
      }
    }, 600); // delay for navbar animation
  }, [hash]);

  return null;
}
