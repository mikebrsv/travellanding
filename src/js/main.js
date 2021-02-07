import '../sass/style.sass'

const menuToggle = document.querySelector('.toggle')
const contentMain = document.querySelector('.content-main')
const menu = document.querySelector('.menu')
const showcase = document.querySelector('.showcase')

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active')
  contentMain.classList.toggle('active')
  menu.classList.toggle('active')
})

const isInViewport = function (elem) {
  const bounding = elem.getBoundingClientRect()
  return (
    bounding.bottom <= 0
  )
}

window.addEventListener('scroll', function (event) {
  if (isInViewport(showcase)) {
    menuToggle.classList.add('dark')
  } else {
    menuToggle.classList.remove('dark')
  }
}, false)