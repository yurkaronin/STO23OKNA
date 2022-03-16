let ourWorksSwiper = new Swiper(".js-our-works-swip", {
  spaceBetween: 0,
  loop: true,
  slidesPerView: 1,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".js-our-works-pagination",
    clickable: true,
    type: "fraction",
  },
  navigation: {
    nextEl: ".js-our-works-button-next",
    prevEl: ".js-our-works-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 0
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 0
    },
    1440: {
      slidesPerView: 5,
      spaceBetween: 0
    },
  }
});

let reviewsSwiper = new Swiper(".js-reviews-swip", {
  spaceBetween: 32,
  loop: true,
  slidesPerView: 1,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".js-reviews-pagination",
    clickable: true,
    type: "fraction",
  },
  navigation: {
    nextEl: ".js-reviews-button-next",
    prevEl: ".js-reviews-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    670: {
      slidesPerView: 2,
      spaceBetween: 32
    }
  }
});