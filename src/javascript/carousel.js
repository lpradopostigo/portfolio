import { LitElement, html, css } from 'lit';

export class BrCarousel extends LitElement {

  static get styles() {
    return css`
      :host {
        display: block;
        width: 50%;
        position: relative;
        margin: auto;

      }


      ::slotted(svg), ::slotted(img), ::slotted(div){
        display: block;
        position: absolute;
        opacity: 0;
        transition: all 1.25s;
      }
    `;
  }
  constructor() {
    super();
  }

  render() {
    return html`
      <slot></slot>
    `;
  }

  firstUpdated() {
    const queue = Array.from(this.shadowRoot.querySelector("slot").assignedElements());
    this._forward(queue);
    setInterval(() => {
      this._forward(queue);
    }, 2500);
  }

  _styleLeft(element) {
    element.style.left = "0";
    element.style.transform = "scale(1)";
    element.style.right = "100%";
    element.style.opacity = "1";
    element.style.zIndex = "-1";

  }

  _styleRight(element) {
    element.style.right = "0";
    element.style.left = "100%";
    element.style.transform = "translateX(-100%)  scale(1)";
    element.style.opacity = "1";
    element.style.zIndex = "-1";



  }

  _styleMiddle(element) {
    element.style.left = "50%";
    element.style.right = "50%";
    element.style.transform = "translateX(-50%) scale(1.25)";
    element.style.opacity = "1";
    element.style.zIndex = "1";


  }

  _forward(queue) {

    this._styleLeft(queue[queue.length - 1]);
    this._styleMiddle(queue[0]);
    this._styleRight(queue[1]);
    queue[queue.length - 2].style.opacity = "0";

    queue.push(queue.shift());

  }

}

window.customElements.define('br-carousel', BrCarousel);
