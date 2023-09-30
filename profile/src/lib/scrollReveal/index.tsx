import { useEffect } from "react";

import ScrollReveal from "scrollreveal";

export function AnimationScroll() {
  return useEffect(() => {
    ScrollReveal({
      distance: "50px",
      duration: 1000
    });
    ScrollReveal().reveal(".aside", { delay: 400, origin: "left" });
    ScrollReveal().reveal(".list", { delay: 600, interval: 100 });
    ScrollReveal().reveal(".bottom", { delay: 300, origin: "bottom" });
    ScrollReveal().reveal(".top", { delay: 500, origin: "top", interval: 40 });
    ScrollReveal().reveal(".top-img", {
      delay: 200,
      origin: "top",
      interval: 40
    });

    ScrollReveal().reveal(".right", {
      delay: 600,
      origin: "right",
      interval: 100
    });
    ScrollReveal().reveal(".open", {
      delay: 500,
      rotate: {
        x: 360,
        y: 270
      }
    });
  }, []);
}
