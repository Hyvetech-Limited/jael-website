/* Author: Ore Akinwole for Jiffix Technologies */

$(document).ready(function () {
  $(".jael-slick-carousel").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  });

  $(".next-text-slide-btn").click(function () {
    $(".jael-slick-carousel").slick("slickNext");
  });

  $(".prev-text-slide-btn").click(function () {
    $(".jael-slick-carousel").slick("slickPrev");
  });

  // Enable Toolips everywhere
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  $(".hamburgermobile").click(function () {
    $(".mobile-navigation").toggleClass("mobile-navigation-closed");

    var srcName =
      $(".hamburgermobile").attr("src") === "img/hamburger_menu.svg"
        ? "img/Close.svg"
        : "img/hamburger_menu.svg";

    $(".hamburgermobile").attr("src", srcName);
  });
});
