const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const sections = document.querySelectorAll("main section");
const year = document.querySelector("#year");

if (year) year.textContent = new Date().getFullYear();

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
    navLinks.classList.toggle("is-open", !isOpen);
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
      navLinks.classList.remove("is-open");
    });
  });
}

// Keep content visible by default; reveal animation only runs when JS is active.
document.documentElement.classList.add("js-ready");

const revealSections = () => {
  const trigger = window.innerHeight * 0.88;
  sections.forEach((section) => {
    if (section.getBoundingClientRect().top < trigger) section.classList.add("show");
  });
};

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  sections.forEach((section) => observer.observe(section));
} else {
  window.addEventListener("scroll", revealSections, { passive: true });
  window.addEventListener("load", revealSections);
  revealSections();
}
