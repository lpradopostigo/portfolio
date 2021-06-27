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
  }

  static get styles () {
    return styles
  }

  static get properties () {
    return {
      repositoryHref: { attribute: 'repository-href' },
      websiteHref: { attribute: 'website-href' }
    }
  }

  static getHrefButton (label, href) {
    return html`<a href=${href} target="_blank" rel="noreferrer noopener"
                   @click=${(e) => {
                       e.stopPropagation()
                   }}>${label}</a>`
  }

  render () {
    return html`
        <div class="container" @click=${this.toggleLinks}>
            <slot class="thumbnail" name=thumbnail></slot>

            <div class="link-wrapper">
                ${this.repositoryHref
                        ? ProjectCard.getHrefButton('Repository', this.repositoryHref)
                        : null}
                ${this.websiteHref
                        ? ProjectCard.getHrefButton('Website', this.websiteHref)
                        : null}
            </div>
        </div>

        <div class="details" @click=${this.toggleLinks}>
            <slot class="title" name=title></slot>
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
