import { LitElement, html, css } from 'lit'

export default class BroNav extends LitElement {
  static get styles () {
    return css`
      :host{
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      slot[name=logo]{
        display: flex;
        width: 25%;
        align-items: center;
      }

      slot[name=items]{
        display: flex;
        justify-content: space-between;
        width: 75%;
      }


    `
  }

  render () {
    return html`
      <slot name=logo></slot>
      <slot name=items>No items to show</slot>
    `
  }
}

window.customElements.define('bro-nav', BroNav)
