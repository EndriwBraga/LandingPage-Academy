const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav__suprime");
const links = document.querySelectorAll(".nav__links a");

const track = document.querySelector(".explore__grid");
const nextCard = document.querySelector(".next");
const prevCard = document.querySelector(".prev");

const totalCards = document.querySelectorAll(".explore__card").length;

if (hamburger && nav) {
  hamburger.addEventListener("click", () => nav.classList.toggle("active"));

  links.forEach(link => {
    link.addEventListener("click", () => nav.classList.remove("active"));
  });
}

let currentIndex = 0;
const cardWidth = 268 + 32; // 268px de largura + 2rem (32px) de gap convertido para pixels


function updateCarousel() {
  track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

nextCard.addEventListener("click", () => {
  if(currentIndex < totalCards -3){
    currentIndex++;
    updateCarousel();
  }
});

prevCard.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

console.log(nextCard);
console.log(prevCard);
console.log(totalCards);
console.log(cardWidth);