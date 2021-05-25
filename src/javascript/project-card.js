import { LitElement, html, css } from 'lit';


export class ProjectCard extends LitElement {
  static get styles() {
    return css`

        :host{
          display: block;
        }
       .card{
        border-radius: 0.375rem;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
       }

       .thumbnail-container{
         height: 18rem;
         width:100%;
         overflow: hidden;
         position: relative;
       }

       ::slotted(img){
         object-fit: cover;
         object-position: center;
         max-height: 100%;
         width:100%;
         transition: all .5s;

       }

       .links{
         width: 100%;
         height: 100%;
         background-color: rgba(0,0,0,.6);
         position: absolute;
         top: 100%;
         transition: all .5s;
         display: flex;
         align-items: center;
         justify-content:space-evenly;
       }

       slot[name=title]{
        font-size: 1.125rem;
        line-height: 1.75rem;
        font-weight: 600;
        font-family: Quicksand, sans-serif;
       }

       .details{
        padding-left: 2.5rem;
        padding-right: 2.5rem;
        padding-top: 1.25rem;
        padding-bottom: 1.25rem;
       }

       .button{
        border-width: 1px;
        padding: 0.25rem;
        text-decoration: none;
        border-style: solid;
        border-color: rgba(255, 255, 255, 1);
        color: rgba(255, 255, 255, 1);

       }
       .button:hover{
        background-color: rgba(37, 99, 235, 1);
       }
     `;
  }

  static get properties() {
    return {
      repositoryHref: { type: String },
      websiteHref: { type: String }
    };
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="card">
        <div class="thumbnail-container" @mouseenter=${this._showLinks} @mouseleave=${this._hideLinks}>
          <slot name=thumbnail></slot>
          <div class="links">
            ${this.repositoryHref ? html`<a class="button" href=${this.repositoryHref} target="_blank"
              rel="noreferrer noopener">Repository</a>` : null}
            ${this.websiteHref ? html`<a class="button" href=${this.websiteHref} target="_blank"
              rel="noreferrer noopener">Website</a>` : null}
          </div>
        </div>
        <div class="details">
          <slot name=title></slot>
          <slot name=description></slot>
        </div>
      </div>
  `;
  }

  _showLinks() {
    const thumbnail = this.shadowRoot.querySelector("slot[name=thumbnail]").assignedNodes()[0];
    const links = this.shadowRoot.querySelector(".links");

    thumbnail.style.transform = "scale(1.2)";
    links.style.transform = "translateY(-100%)";

  }

  _hideLinks() {
    const thumbnail = this.shadowRoot.querySelector("slot[name=thumbnail]").assignedNodes()[0];
    const links = this.shadowRoot.querySelector(".links");
    thumbnail.style.transform = "scale(1)";
    links.style.transform = "translateY(100%)";


  }


}

window.customElements.define('project-card', ProjectCard);;