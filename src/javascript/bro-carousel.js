import { LitElement, html, css } from 'lit'

export default class BroCarousel extends LitElement {
  static get styles () {
    return css`
      :host {
        display: grid;
        grid-template-areas: "stack";
      }

      :host > ::slotted(*) {
        transition-property: all;
        transition-duration: 1s;
        opacity: 0;
        position: static;
        grid-area:stack;
        display: block;
      }
    `
  }

  constructor () {
    super()
    this.queue = []
  }

  render () {
    return html`
      <slot></slot>
    `
  }

  firstUpdated () {
    this.queue = Array.from(this.shadowRoot.querySelector('slot').assignedElements())
    this.queue[0].style.opacity = 1
    this.queue[0].style.zIndex = 1

    setTimeout(() => {
      this.queue[1].style.zIndex = 0
      this.queue[1].style.transform = 'scale(.75) translateX(100%)'
      this.queue[1].style.opacity = 1

      this.queue[2].style.zIndex = -1
      this.queue[2].style.transform = 'scale(.75) translateX(100%)'

      this.queue[this.queue.length - 1].style.zIndex = -1
      this.queue[this.queue.length - 1].style.transform = 'scale(.75) translateX(-100%)'
      this.queue[this.queue.length - 1].style.opacity = 1
    }, 500)

    setInterval(() => {
      this.forward()
    }, 2500)
  }

  forward () {
    this.queue[0].style.zIndex = -1
    this.queue[0].style.transform = 'scale(.75) translateX(-100%)'
    this.queue[0].style.opacity = 1

    this.queue[1].style.zIndex = 1
    this.queue[1].style.transform = 'scale(1)'
    this.queue[1].style.opacity = 1

    this.queue[2].style.zIndex = 0
    this.queue[2].style.opacity = 1

    this.queue[this.queue.length - 1].style.transform = 'scale(.75) translateX(100%)'
    this.queue[this.queue.length - 1].style.opacity = 0

    this.queue.push(this.queue.shift())
  }
}

window.customElements.define('bro-carousel', BroCarousel)
