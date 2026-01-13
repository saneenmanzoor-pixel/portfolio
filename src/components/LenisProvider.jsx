import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function LenisProvider({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) =>
        t === 1 ? 1 : 1 - Math.pow(2, -10 * t),
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // expose lenis globally 👇 (IMPORTANT for navbar)
    window.lenis = lenis;

    return () => lenis.destroy();
  }, []);

  return children;
}
