document.addEventListener("DOMContentLoaded", function() {
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1, // Number of slides to show at once
      spaceBetween: 20, // Space between slides in pixels
      loop: true, // Enable looping
      centeredSlides: true, // Center the active slide
      autoplay: false, // Disable autoplay
      pagination: {
        el: '.swiper-pagination', // Pagination selector
        clickable: true, // Enable click on pagination bullets
      },
      navigation: {
        nextEl: '.swiper-button-next', // Next button selector
        prevEl: '.swiper-button-prev', // Previous button selector
      },
      breakpoints: {
        640: { // When window width is >= 640px
          slidesPerView: 2, // Show 2 slides on medium screens
        },
        1024: { // When window width is >= 1024px
          slidesPerView: 3, // Show 3 slides on large screens
        }
      }
    });
});
