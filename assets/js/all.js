"use strict";

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
        spaceBetween: 30
      },
      992: {
        slidesPerView: 1.3,
        spaceBetween: 30
      }
    }
  }); // commentSwiper

  var swiper = new Swiper(".commentSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });
  var swiper = new Swiper(".chooseCourse", {
    slidesPerView: 1,
    spaceBetween: 20,
    scrollbar: {
      el: ".swiper-scrollbar"
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        grid: {
          rows: 3
        }
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });
});
//# sourceMappingURL=all.js.map