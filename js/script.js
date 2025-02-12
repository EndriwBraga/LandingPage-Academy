const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav__suprime");
const links = document.querySelectorAll(".nav__links a");

const track = document.querySelector(".explore__grid");
const nextCard = document.querySelector(".next");
const prevCard = document.querySelector(".prev");

const totalCards = document.querySelectorAll(".explore__card").length;
const cardWidth = 268 + 32;

if (hamburger && nav) {
  hamburger.addEventListener("click", () => nav.classList.toggle("active"));

  links.forEach(link => {
    link.addEventListener("click", () => nav.classList.remove("active"));
  });
}

function getMaxIndex() {
  return window.innerWidth <= 900 ? totalCards - 2 : totalCards - 3;
}

let currentIndex = 0;

function updateCarousel() {

  let maxIndex = getMaxIndex();

  if (currentIndex > maxIndex) {
 
    currentIndex = 0; 
  } else if (currentIndex < 0) {
    currentIndex = maxIndex;  
  }

  track.style.transition = "transform 0.5s ease-in-out";
  track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

nextCard.addEventListener("click", () => {
  let maxIndex = getMaxIndex();
  if (currentIndex < maxIndex) {
    currentIndex++;  
  } else {
    currentIndex = 0; 
  }
  updateCarousel();
});

prevCard.addEventListener("click", () => {
  let maxIndex = getMaxIndex();
  if (currentIndex > 0) {
    currentIndex--;  
  } else {
    currentIndex = maxIndex;
  }
  updateCarousel();
});

let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout); 
  resizeTimeout = setTimeout(() => {
    updateCarousel(); 
  }, 200); 
});

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
