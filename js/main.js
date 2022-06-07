$(function () {
  $(".feedback__slider").slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    dots: true,
    variableWidth: true,
    adaptiveHeight: true,
  });

  $(".menu__brg").click(function () {
    $(".menu__brg, .header__menu-list").toggleClass("active");
  });
});
