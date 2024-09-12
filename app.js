function Toggle() {
    const navbar = document.getElementById("nav");
    // navbar.style.display="block";
    console.log('clicked');
    if (navbar.style.display === "block") {
        navbar.style.display = "none";
    }
    else {
        navbar.style.display = "block";
    }

}


var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    loop: true,
    autoplay: {
        delay: 6000, 
        disableOnInteraction: false, 
    },
});

const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const slides = slidesContainer.childElementCount;
const slideWidth = slide.clientWidth;
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", () => {
  if (slidesContainer.scrollLeft == (slides * slideWidth)) {
    slidesContainer.scrollLeft = 0;
    return;
  }
  slidesContainer.scrollLeft += slideWidth;
});

slidesContainer.addEventListener("scroll", () => {
  slidesContainer.scrollLeft += slideWidth;
  setTimeout(() => {}, 1000);
});

prevButton.addEventListener("click", () => {
  slidesContainer.scrollLeft -= slideWidth;
});

// function flipCard(card) {
//     card.classList.toggle('flipped');
// }


