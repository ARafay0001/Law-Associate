// Update year
document.getElementById("year").textContent = new Date().getFullYear();

// Scroll effect for navbar
// window.addEventListener("scroll", () => {
//   const navbar = document.getElementById("navbar");
//   navbar.classList.toggle("scrolled", window.scrollY > 60);
// });

// Fade-in on scroll
const elements = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

elements.forEach((el) => observer.observe(el));

const menuToggle = document.getElementById("mobile-menu");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close menu when a link is clicked
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    navMenu.classList.remove("active");
  });
});
