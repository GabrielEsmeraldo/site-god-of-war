var swiper = new Swiper(".character-slide", {
  slidesPerView: 3.5,
  spaceBetween: 19,
  freeMode: true,

  breakpoints: {
    320: {
      slidesPerView: 1.1,
      spaceBetween: 19,
    },

    480: {
      slidesPerView: 2.1,
      spaceBetween: 19,
    },
    480: {
      slidesPerView: 2.1,
      spaceBetween: 19,
    },
    798: {
      slidesPerView: 3.1,
      spaceBetween: 19,
    },
    1200: {
      slidesPerView: 4.1,
      spaceBetween: 19,
    },
  },
}
);

AOS.init({
  duration: 1000,
});