//Abrindo e fechando menu mobile
const mostraMenu = document.querySelector('header nav') 
const iconesMenu = document.querySelectorAll('.toggle') //Icone do menu e Icone 'X'
iconesMenu.forEach((icone) => { //Para cada um dos icones, faça...
  icone.addEventListener('click', () => { //Quando eu clicar em qualquer um dos dois, verifica...
    mostraMenu.classList.toggle('show') //Se não tiver o show, coloca, se tiver, retira
  })
})
const linksMenu = document.querySelectorAll('.menu-link li a') //Seleciona todos os links do menu
linksMenu.forEach((link) => { //Para cada um deles, faça...
  link.addEventListener('click', () => { //Quando eu clicar em qualquer um deles
    mostraMenu.classList.remove('show') //Remova a classe show
  })
})

//Aplicando sombra no cabeçalho quando der scroll na página
const cabecalho = document.querySelector('.menu')
const alturaCabecalho = cabecalho.offsetHeight
window.addEventListener ('scroll', () => {
  if (window.scrollY >= alturaCabecalho ){
    cabecalho.classList.add('scroll')
  } else {
    cabecalho.classList.remove('scroll')
  }
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
    481: {
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