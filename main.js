const cabecalho = document.querySelector('.menu')
const alturaCabecalho = cabecalho.offsetHeight
window.addEventListener ('scroll', () => {
  if (window.scrollY >= alturaCabecalho ){
    cabecalho.classList.add('scroll')
  } else {
    cabecalho.classList.remove('scroll')
  }
})
