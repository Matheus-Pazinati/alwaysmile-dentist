const cabecalho = document.querySelector('.menu')
const alturaCabecalho = cabecalho.offsetHeight
window.addEventListener ('scroll', () => {
  if (window.scrollY >= alturaCabecalho ){
    cabecalho.classList.add('scroll')
  } else {
    cabecalho.classList.remove('scroll')
  }
})

const swiper = new Swiper('.swiper', {
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 32,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  keyboard: true
});
