export function showMenu() {
  const menuBox = document.querySelector('header nav') 
  const menuIcons = document.querySelectorAll('.toggle')
  menuIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
     menuBox.classList.toggle('show')
    })
  })
  const menuItems = document.querySelectorAll('.menu-link li a')
  menuItems.forEach((item) => {
    item.addEventListener('click', () => {
      menuBox.classList.remove('show')
    })
  })
}