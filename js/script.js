const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav__suprime");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));

