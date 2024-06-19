/*--services--*/
var swiperServices = new Swiper(".mySwiperservices", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    700: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

/*--team--*/
var swiperTeam = new Swiper(".mySwiperteam", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    560: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    950: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1250: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});

/*--testimonials--*/
var swiperTesti = new Swiper(".mySwipertesti", {
  pagination: {
    el: ".swiper-pagination",
  },
});
