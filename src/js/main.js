import '../sass/style.sass';

const menuToggle = document.querySelector('.toggle')
const content = document.querySelector('.content')
const menu = document.querySelector('.menu')

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active')
  content.classList.toggle('active')
  menu.classList.toggle('active')
})