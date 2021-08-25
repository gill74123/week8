$(document).ready(function () {
  // courseSwiper
  var swiper = new Swiper(".courseSwiper", {
    // 循環
    loop: true,

    // 自動播放
    // autoplay: true,
    speed: 700,

    

    // 斷點可看見的slide數量
    breakpoints: {
      768: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 1.3,
        spaceBetween: 30,
      }
    },
  });

  // commentSwiper
  var swiper = new Swiper(".commentSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});