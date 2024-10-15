document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper(".swiper-container", {
        slidesPerView: 4,
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true, 
        breakpoints: {
            320: { slidesPerView: 1, spaceBetween: 0 },
            768: { slidesPerView: 1, spaceBetween: 0 },
            1024: { slidesPerView: 1, spaceBetween: 0 },
            1200: { slidesPerView: 1, spaceBetween: 0 }
        }
      });
 });
