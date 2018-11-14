$(document).ready(function () {
  $('.top').slick({
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
  $('.feedbacks_slider').slick({
      arrows: true,
      centerMode: true,
      centerPadding: '100px',
      slidesToShow: 1,
      variableWidth:true,
      asNavFor: '.feedbacks_slider_text',

  });
  $('.feedbacks_slider_text').slick({
      slidesToShow: 1,
      arrows: false,
      slidesToScroll: 1,
      asNavFor: '.feedbacks_slider',
      draggable: false,
  });
});