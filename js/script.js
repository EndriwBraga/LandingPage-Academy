const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav__suprime");
const links = document.querySelectorAll(".nav__links a");

if (hamburger && nav) {
  hamburger.addEventListener("click", () => nav.classList.toggle("active"));

  links.forEach(link => {
    link.addEventListener("click", () => nav.classList.remove("active"));
  });
}

