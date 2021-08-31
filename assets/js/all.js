"use strict";

$(document).ready(function () {
  // courseSwiper-index.html
  var swiper = new Swiper(".courseSwiper", {
    // 循環
    loop: true,
    // 自動播放
    autoplay: true,
    speed: 700,
    // 斷點可看見的slide數量
    breakpoints: {
      992: {
        slidesPerView: 1.3,
        spaceBetween: 30
      }
    }
  }); // commentSwiper-index.html

  var swiper = new Swiper(".commentSwiper", {
    // 循環
    loop: false,
    slidesPerView: 1,
    spaceBetween: 8,
    grid: {
      rows: 3,
      fill: 'row'
    },
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev'
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        grid: {
          rows: 2,
          fill: 'row'
        }
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
        grid: {
          rows: 2,
          fill: 'row'
        }
      }
    }
  }); // chooseCourseSwiper-reservation.html

  var swiper = new Swiper(".chooseCourseSwiper", {
    // 循環
    loop: false,
    // 自動播放
    autoplay: true,
    speed: 700,
    scrollbar: {
      el: ".swiper-scrollbar"
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 24,
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
  }); // teacherSwiper-course.html

  var swiper = new Swiper(".teacherSwiper", {
    // 循環
    loop: false,
    // 自動播放
    autoplay: true,
    speed: 700,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 24,
        grid: {
          rows: 4
        }
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  }); // recommendSwiper-surroundings.html

  var swiper = new Swiper(".recommendSwiper", {
    // 循環
    loop: false,
    // 自動播放
    autoplay: true,
    speed: 700,
    breakpoints: {
      0: {
        slidesPerView: 1.3,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 30
      }
    }
  }); // datepicker-reservation-form.html

  var elem = document.querySelector('input[name="datepicker"]');
  var datepicker = new Datepicker(elem, {
    autohide: true,
    buttonClass: 'btn text-primary',
    nextArrow: '>',
    prevArrow: '<'
  });
}); // AOS

AOS.init({
  once: false
});
//# sourceMappingURL=all.js.map
