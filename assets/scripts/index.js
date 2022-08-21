import { handleUpButton } from "./handle-up-button.js";
import { setHeaderShadow } from "./set-header-shadow.js";
import { showMenu } from "./show-menu-mobile.js";
import { setScrollReveal } from "./scroll-reveal.js";
import { createCarousel } from "./carousel.js";

//Abrindo e fechando menu mobile
showMenu()

//Aplicando sombra no cabeçalho e incluindo botão de voltar para cima dependendo do scroll na página
window.addEventListener ('scroll', () => {
  setHeaderShadow();
  handleUpButton();
})

//Criando carrossel dos depoimentos com o Swiper
createCarousel()

//Adicionando efeito de "lentidão" ao dar scroll na página utilizando ScrollReveal
setScrollReveal()