var appendNumber = 4;
var prependNumber = 1;

const swiperHero = new Swiper(".swiper-container__hero", {
  centeredSlides: true,
  slidesPerView: 1,
  autoplay: {
    delay: 4000,
  },
  speed: 1000,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination__hero",
    // dynamicBullets: true,
    clickable: true,
  },
  loop: true,
});

const swiperGallery = new Swiper(".swiper-container__gallery", {
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination__gallery",
    type: "fraction",
  },
  breakpoints: {
    // when window width is <= 999px
    999: {
      slidesPerView: 4,
      spaceBetweenSlides: 50,
      centeredSlides: false,
    },
  },
});

// document
//   .querySelector(".prepend-2-slides")
//   .addEventListener("click", function (e) {
//     e.preventDefault();
//     swiper1.prependSlide([
//       '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
//       '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
//     ]);
//   });

// document
//   .querySelector(".prepend-slide")
//   .addEventListener("click", function (e) {
//     e.preventDefault();
//     swiper1.prependSlide(
//       '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
//     );
//   });

// document.querySelector(".append-slide").addEventListener("click", function (e) {
//   e.preventDefault();
//   swiper1.appendSlide(
//     '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
//   );
// });

// document
//   .querySelector(".append-2-slides")
//   .addEventListener("click", function (e) {
//     e.preventDefault();
//     swiper1.appendSlide([
//       '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
//       '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
//     ]);
//   });
