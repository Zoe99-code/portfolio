function toggleNavbar() {
  document.getElementsByClassName("navbar-links")[0].classList.toggle("active");
}
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    dots: false,
    autoplay: true,
    items: 1,
    margin: 0,
    stagePadding: 0,
  });
});
