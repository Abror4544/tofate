$(function () {
  $(".slider-wrapper").slick({
    dots: true,
    infinite: false,
    speed: 500,
    fade: true,
    cssEase: "linear",
    prevArrow: $(".girls-button-prev"),
    nextArrow: $(".girls-button-next"),
    dotsClass: "dot",
    appendDots: $(".dots"),
  });

  $(".screenslide-wrapper").slick({
    dots: false,
    infinite: false,
    prevArrow: false,
    nextArrow: false,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 340,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });


  $(".model-gallery-slider").slick({
    dots: true,
    infinite: false,
    speed: 500,
    fade: true,
    cssEase: "linear",
    prevArrow: $(".model-button-prev"),
    nextArrow: $(".model-button-next"),
    dotsClass: "dot",
    appendDots: $(".model-gallery .dots"),
  });


  let target = document.querySelectorAll(".footer-menu__title");
  let menu = document.querySelectorAll(".footer-menu__list");

  for (let i = 0; i < target.length; i++) {
    target[i].addEventListener("click", () => {
      if (menu[i].classList.contains("active")) {
        menu[i].classList.remove("active");
      } else {
        menu[i].classList.add("active");
      }
    });
  }
});
