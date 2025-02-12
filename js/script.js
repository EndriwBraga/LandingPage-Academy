const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav__suprime");
const links = document.querySelectorAll(".nav__links a");

const track = document.querySelector(".explore__grid");
const nextCard = document.querySelector(".next");
const prevCard = document.querySelector(".prev");

const totalCards = document.querySelectorAll(".explore__card").length;
const cardWidth = 268 + 32; // Possivel melhoria, descobrir como fazer para pegar automaticamento o tamanho do card + o tamanho do gap em vez de eu proporcionar as larguras.

if (hamburger && nav) {
  hamburger.addEventListener("click", () => nav.classList.toggle("active"));

  links.forEach(link => {
    link.addEventListener("click", () => nav.classList.remove("active"));
  });
}

let currentIndex = 0;
nextCard.addEventListener("click", () => {
  if (currentIndex < totalCards - 1) {
    currentIndex++;  
  } else {
    currentIndex = 0;  
  }
  updateCarousel();
});

prevCard.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalCards) % totalCards; 
  updateCarousel();
});

function updateCarousel() {
  // Obs p mim do futuro: Aqui fica -2 por que se eu deixar -1, vai aparecer um slide fantasma
  // e não buga por causa da nextCard.
  if (currentIndex >= totalCards - 2) {  
    currentIndex = 0; 
  } else if (currentIndex < 0) {
    currentIndex = totalCards - 3; 
  }

  track.style.transition = "transform 0.5s ease-in-out";
  track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

let startX = 0;
track.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

let endX = 0;
track.addEventListener("touchmove", (e) => {
  endX = e.touches[0].clientX;
});

track.addEventListener("touchend", () => {
  let deltaX = startX - endX;

  if (deltaX > 50 && currentIndex < totalCards - 3) {
    currentIndex++;
  } else if (deltaX < -50 && currentIndex > 0) {
    currentIndex--;
  }
  updateCarousel();
}); 

// DIV de depoimentos // Possivel carrocel, só não sei precisa.
const reviewContainer = document.querySelector(".review__container");
const review__content = document.querySelector(".review__content");

console.log(reviewContainer);
console.log(review__content);
