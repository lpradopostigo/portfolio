
import '../static/index.html'
import '../styles/index.css'
import './components/project-card'
import './components/bro-carousel'
import '@brocolio/bro-nav'
import './test.ts'
// fix event still prensent when window change its size
const navbar = document.querySelector('bro-nav')

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

// const body = document.querySelector('body')
// body.addEventListener('touchstart', () => { console.log('start') })
// body.addEventListener('touchend', () => { console.log('end') })
// body.addEventListener('touchcancel', () => { console.log('cancel') })
// body.addEventListener('touchmove', () => { console.log('move') })
