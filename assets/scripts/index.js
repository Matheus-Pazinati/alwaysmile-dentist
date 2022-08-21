import { handleUpButton } from "./handle-up-button.js";
import { setHeaderShadow } from "./set-header-shadow.js"
import { showMenu } from "./show-menu-mobile.js"

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
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true,
})

scrollReveal.reveal(
  `#main .description, #main .clinic,
   #about .about-image, #about .about-us,
   #services .services-description, #services .services-examples,
   #testimony header, #testimony .testimony-items,
   #contact .contact-text, #contact .contact-information,
   footer .copyright, footer .socials`
   , { interval: 100 }
  )