import { animate } from "framer-motion";

export function springScrollTo(target) {
  const targetY =
    target.getBoundingClientRect().top + window.scrollY;

  animate(window.scrollY, targetY, {
    type: "spring",
    stiffness: 100,  // softer
    stiffness: 160,  // snappier
    damping: 30,     // heavier feel

    onUpdate: (value) => {
      window.scrollTo(0, value);
    },
  });
}
