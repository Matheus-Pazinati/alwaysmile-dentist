export function createCarousel() {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 32,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    keyboard: true,
      breakpoints: {
      601: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        mousewheel: true,
      },
    },
  });
}