export function setHeaderShadow() {
  const header = document.querySelector('.menu')
  const headerHeight = header.offsetHeight
  if (window.scrollY >= headerHeight ){
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}