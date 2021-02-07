import '../sass/style.sass';

const menuToggle = document.querySelector('.toggle')
const contentMain = document.querySelector('.content-main')
const menu = document.querySelector('.menu')

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active')
  contentMain.classList.toggle('active')
  menu.classList.toggle('active')
})