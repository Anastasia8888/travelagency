$(document).ready(function () {
  $('.top__slider').slick({
    arrows: false,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    draggable: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    rtl: true,
  });
  $('.carousel').slick({
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,

  });
  $('.slider').slick({
  arrows: true,
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  variableWidth:true,

  });
  $('.feedbacks__slider').slick({
      arrows: true,
      centerMode: true,
      centerPadding: '100px',
      slidesToShow: 1,
      variableWidth:true,
      asNavFor: '.feedbacks-slider__text',

  });
  $('.feedbacks-slider__text').slick({
      slidesToShow: 1,
      arrows: false,
      slidesToScroll: 1,
      asNavFor: '.feedbacks__slider',
      draggable: false,
  });
});