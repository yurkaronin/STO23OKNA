let swiper = new Swiper(".our-works-swiper", {
  spaceBetween: 0,
  loop: true,
  slidesPerView: 5,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});