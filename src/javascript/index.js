
import '../static/index.html'
import '../styles/index.css'
import './project-card'
import './bro-carousel'
import './bro-nav'

const navbar = document.querySelector('nav')

window.addEventListener('scroll', () => {
  window.scrollY > 100 && (navbar.style.background = 'rgba(0,0,0,0.8)')
  window.scrollY < 100 && (navbar.style.background = 'transparent')
})

// const body = document.querySelector('body')
// body.addEventListener('touchstart', () => { console.log('start') })
// body.addEventListener('touchend', () => { console.log('end') })
// body.addEventListener('touchcancel', () => { console.log('cancel') })
// body.addEventListener('touchmove', () => { console.log('move') })
