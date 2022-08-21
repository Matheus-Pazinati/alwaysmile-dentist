export function handleUpButton() {
  const upButton = document.querySelector('#button-top')
  if (window.scrollY >= 560){
    upButton.classList.remove('hide-button')
  } else {
    upButton.classList.add('hide-button')
  }
}