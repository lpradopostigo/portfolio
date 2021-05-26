import "tailwindcss/tailwind.css";

import "/src/styles/index.css";
import "./project-card";
import "./carousel";

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  window.scrollY > 100 && (navbar.style.background = `rgba(0,0,0,0.8)`);
  window.scrollY < 100 && (navbar.style.background = `transparent`);
});
