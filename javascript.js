function toggleNavbar() {
  document.getElementsByClassName("navbar-links")[0].classList.toggle("active");
}
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    dots: false,
    autoplay: true,
    items: 1,
    margin: 5,
    stagePadding: 0,
  });
});
