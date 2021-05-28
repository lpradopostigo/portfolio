import { LitElement, html, css } from 'lit'

export default class ProjectCard extends LitElement {
  static get styles () {
    return css`
      :host {
        display: block;
        border-radius: 0.375rem;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        /* box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow); */
      }

      :host > div:first-child {
        height: 14rem;
        width:100%;
        overflow: hidden;
        position: relative;
      }

      ::slotted(img) {
        object-fit: cover;
        object-position: center;
        max-height: 100%;
        min-height: 100%;
        width:100%;
        transition: all 1s;

      }

      :host > div > div {
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.5);
        position: absolute;
        top: 100%;
        transition: all .5s;
        display: flex;
        align-items: center;
        justify-content:space-evenly;
      }

      slot[name=title] {
        font-size: 1.125rem;
        line-height: 1.75rem;
        font-weight: 600;
      }

      :host > div:nth-child(2) {
        padding-left: 2.5rem;
        padding-right: 2.5rem;
        padding-top: 1.25rem;
        padding-bottom: 1.25rem;
      }

      a {
        border-width: 1px;
        padding: 0.25rem;
        text-decoration: none;
        border-style: solid;
        border-color: rgba(255, 255, 255, 1);
        color: rgba(255, 255, 255, 1);
      }
      a:hover{
        background-color:#EF476F;
      }

      @media (min-width: 640px) {
        :host > div:first-child{
          height: 20rem;
        }
       }

      @media (min-width: 1024px) {
        :host > div:first-child{
          height: 24rem;
        }
      }

     `
  }

  static get properties () {
    return {
      repositoryHref: { type: String },
      websiteHref: { type: String }
    }
  }

  constructor () {
    super()
    this.touched = false
    this.links = undefined
    this.thumbnail = undefined
  }

  render () {
    return html`
      <div @mouseenter=${this.showLinks} @mouseleave=${this.hideLinks} @touchstart=${this.toggleLinks}>
        <slot name=thumbnail></slot>
        <div>
          ${this.repositoryHref
            ? html`<a href=${this.repositoryHref} target="_blank" rel="noreferrer noopener"
                @touchstart=${(event) => { event.stopPropagation() }}>Repository</a>`
            : null}
          ${this.websiteHref
            ? html`<a href=${this.websiteHref} target="_blank" rel="noreferrer noopener"
                @touchstart=${(event) => { event.stopPropagation() }}>Website</a>`
            : null}
        </div>
      </div>
      <div>
        <slot name=title></slot>
        <slot name=description></slot>
      </div>
  `
  }

  firstUpdated () {
    this.thumbnail = this.shadowRoot.querySelector('slot[name=thumbnail]').assignedNodes()[0]
    this.links = this.shadowRoot.querySelector(':host > div > div')
  }

  showLinks () {
    this.thumbnail.style.transform = 'scale(1.2)'
    this.links.style.transform = 'translateY(-100%)'
  }

  hideLinks () {
    this.thumbnail.style.transform = 'scale(1)'
    this.links.style.transform = 'translateY(100%)'
  }

  toggleLinks () {
    if (!this.touched) {
      this.thumbnail.style.transform = 'scale(1.2)'
      this.links.style.transform = 'translateY(-100%)'
    } else {
      this.thumbnail.style.transform = 'scale(1)'
      this.links.style.transform = 'translateY(100%)'
    }
    this.touched = !this.touched
  }
}

window.customElements.define('project-card', ProjectCard)
