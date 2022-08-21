import { handleUpButton } from "./handle-up-button.js";
import { setHeaderShadow } from "./set-header-shadow.js";
import { showMenu } from "./show-menu-mobile.js";
import { setScrollReveal } from "./scroll-reveal.js"

//Abrindo e fechando menu mobile
showMenu()

//Aplicando sombra no cabeçalho e incluindo botão de voltar para cima dependendo do scroll na página
window.addEventListener ('scroll', () => {
  setHeaderShadow();
  handleUpButton();
})

//Criando carrossel dos depoimentos com o Swiper
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

//Adicionando efeito de "lentidão" ao dar scroll na página utilizando ScrollReveal
setScrollReveal()