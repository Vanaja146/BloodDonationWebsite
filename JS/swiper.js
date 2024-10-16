// document.addEventListener("DOMContentLoaded", function() {
//     var swiper = new Swiper('.swiper-container', {
//       slidesPerView: 1, // Number of slides to show at once
//       spaceBetween: 20, // Space between slides in pixels
//       loop: true, // Enable looping
//       centeredSlides: true, // Center the active slide
//       autoplay: false, // Disable autoplay
//       pagination: {
//         el: '.swiper-pagination', // Pagination selector
//         clickable: true, // Enable click on pagination bullets
//       },
//       navigation: {
//         nextEl: '.swiper-button-next', // Next button selector
//         prevEl: '.swiper-button-prev', // Previous button selector
//       },
//       breakpoints: {
//         640: { // When window width is >= 640px
//           slidesPerView: 2, // Show 2 slides on medium screens
//         },
//         1024: { // When window width is >= 1024px
//           slidesPerView: 3, // Show 3 slides on large screens
//         }
//       }
//     });
// });


document.addEventListener("DOMContentLoaded", function() {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1, // Show 1 slide at a time initially
        spaceBetween: 20, // Space between slides
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

    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1, // Default for mobile
        spaceBetween: 20,
        loop: true,
        centeredSlides: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 2, // Show 2 slides on medium screens
            },
            1024: {
                slidesPerView: 2, // Keep 2 slides on large screens for two columns
            }
        }
    });



