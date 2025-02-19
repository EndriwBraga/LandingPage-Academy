const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav__suprime");
const links = document.querySelectorAll(".nav__links a");

const track = document.querySelector(".explore__grid");
const nextCard = document.querySelector(".next");
const prevCard = document.querySelector(".prev");

const nextCardReview = document.querySelector(".nextReview");
const prevCardReview = document.querySelector(".prevReview");

const totalCards = document.querySelectorAll(".explore__card").length;
const cardWidth = 268 + 32;


if (hamburger && nav) {
  hamburger.addEventListener("click", () => nav.classList.toggle("active"));

  links.forEach((link) => {
    link.addEventListener("click", () => nav.classList.remove("active"));
  });
}

function getMaxIndex() {
  return window.innerWidth <= 900 ? totalCards - 2 : totalCards - 3;
}

let currentIndex = 0;
let maxIndex = getMaxIndex();

function updateCarousel() {
  if (currentIndex > maxIndex) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = maxIndex;
  }

  track.style.transition = "transform 0.5s ease-in-out";
  track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;  
}

if (nextCard && prevCard) {
  nextCard.addEventListener("click", () => {
    currentIndex = currentIndex < maxIndex ? currentIndex + 1 : 0;
    updateCarousel();
  });

  prevCard.addEventListener("click", () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : maxIndex;
    updateCarousel();
  });
}

let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    maxIndex = getMaxIndex();
    updateCarousel();
  }, 200);
});

let startX = 0;
let endX = 0;

if (track) {
  track.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  track.addEventListener("touchmove", (e) => {
    e.preventDefault();
    endX = e.touches[0].clientX;
  });

  track.addEventListener("touchend", () => {
    let deltaX = startX - endX;

    if (deltaX > 50) {
      currentIndex = currentIndex < maxIndex ? currentIndex + 1 : 0;
    } else if (deltaX < -50) {
      currentIndex = currentIndex > 0 ? currentIndex - 1 : maxIndex;
    }

    updateCarousel();
  });
}













// DIV de depoimentos // Possivel carrocel, só não sei precisa.
const cardMasterReview = document.querySelector(".review__container__master");
// div do CARD
const totalCardsReview = document.querySelectorAll(".review__content").length;

let currentIndexReview = 0;
const cardWidthReview = 790;

if (nextCardReview && prevCardReview) {
  nextCardReview.addEventListener("click", () => {
    currentIndexReview = currentIndexReview < 2 ? currentIndexReview + 1 : 0;
    updateCarouselReview();
  });

  prevCardReview.addEventListener("click", () => {
    currentIndexReview = currentIndexReview > 0 ? currentIndexReview - 1 : 2;
    updateCarouselReview();
  });
}

function updateCarouselReview() {
  if (currentIndexReview > 2) {
    currentIndexReview = 0;
  } else if (currentIndexReview < 0) {
    currentIndexReview = 2;
  }

  cardMasterReview.style.transition = "transform 0.5s ease-in-out";
  cardMasterReview.style.transform = `translateX(-${currentIndexReview * cardWidthReview}px)`;  
}

console.log(cardMasterReview);








