import '../static/index.html'
import '../styles/index.css'
import './components/project-card'
import './components/bro-carousel'
import '@brocolio/bro-nav'
// fix event still prensent when window change its size
const navbar = document.querySelector('bro-nav')
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#loader').style.display = 'none'
  document.querySelector('#content').style.display = 'initial'
})

if (!window.matchMedia('(min-width: 768px)').matches) {
  const links = Array.from(navbar.querySelectorAll('a'))
  links.forEach(link => {
    link.addEventListener('click', () => {
      navbar.hideLinksContainer()
    })
  })
}

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navbar.style.backgroundColor = 'rgba(0,0,0,0.8)'
  } else {
    navbar.style.backgroundColor = 'transparent'
  }
})
