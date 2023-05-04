$(document).ready(function(){
    $('.c-design__sliderContent').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow: $(".c-control__itemPre"),
        nextArrow: $(".c-control__itemNext"),
    });
  });