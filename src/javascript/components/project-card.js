import { html, LitElement } from 'lit'
import { styles } from './project-card.styles'

export default class ProjectCard extends LitElement {
  constructor () {
    super()
    this.links = undefined
    this.thumbnail = undefined
    this.linksHidden = true
    this.repositoryHref = ''
    this.websiteHref = ''
    this.advice = false
  }

  static get styles () {
    return styles
  }

  static get properties () {
    return {
      repositoryHref: { attribute: 'repository-href' },
      websiteHref: { attribute: 'website-href' },
      advice: { type: Boolean }
    }
  }

  static getHrefButton (label, href) {
    if (href == null || href === '') {
      return html``
    }

    return html`<a href=${href} class="link" target="_blank" rel="noreferrer noopener"
                   @click=${(e) => {
                       e.stopPropagation()
                   }}>${label}</a>`
  }

  static getAdvice (text) {
    if (text == null || text === '') {
      return html``
    }

    return html`
        <div class="advice">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.351 6.493c-.08-.801.55-1.493 1.351-1.493s1.431.692 1.351 1.493l-.801 8.01c-.029.282-.266.497-.55.497s-.521-.215-.55-.498l-.801-8.009zm1.351 12.757c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z"/>
            </svg>
            <span>${text}</span>
        </div>`
  }

  render () {
    return html`
        <div class="container" @click=${this.toggleLinks}>
            <slot class="thumbnail" name=thumbnail></slot>

            <div class="link-wrapper">
                ${ProjectCard.getHrefButton('Repository', this.repositoryHref)}
                ${ProjectCard.getHrefButton('Website', this.websiteHref)}
            </div>
        </div>

        <div class="details" @click=${this.toggleLinks}>
            <slot class="title" name=title></slot>

            ${this.advice ? ProjectCard.getAdvice('in development') : null}

            <slot class="description" name=description></slot>
        </div>
    `
  }

  firstUpdated () {
    this.thumbnail = this.shadowRoot.querySelector('.thumbnail').assignedNodes()[0]
    this.links = this.shadowRoot.querySelector('.link-wrapper')
  }

  showLinks () {
    if (this.linksHidden) {
      this.thumbnail.style.transform = 'scale(1.2)'
      this.links.style.transform = 'translateY(-100%)'
      this.linksHidden = false
    }
  }

  hideLinks () {
    if (!this.linksHidden) {
      this.thumbnail.style.transform = 'scale(1)'
      this.links.style.transform = 'translateY(100%)'
      this.linksHidden = true
    }
  }

  toggleLinks () {
    if (this.linksHidden) {
      this.showLinks()
    } else {
      this.hideLinks()
    }
  }
}

window.customElements.define('project-card', ProjectCard)
