import { css } from 'lit'

export const styles = css`
  :host {
    border-radius: 0.375rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .container {
    height: 14rem;
    width: 100%;
    overflow: hidden;
    position: relative;
  }

  ::slotted(img) {
    object-fit: cover;
    object-position: center;
    max-height: 100%;
    min-height: 100%;
    width: 100%;
    transition: all 1s;
  }

  .link-wrapper {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    position: absolute;
    top: 100%;
    transition: all .5s;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .title {
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 600;
  }

  .details {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
  }

  .link {
    border-width: 1px;
    padding: 0.25rem;
    text-decoration: none;
    border-style: solid;
    border-color: rgba(255, 255, 255, 1);
    color: rgba(255, 255, 255, 1);
    transition-property: background-color;
    transition-duration: 0.25s;
    transition-timing-function: ease-in-out;
    
  }
  
  .link:hover{
    background-color: #EF476F;
  }

  @media (min-width: 640px) {
    .container {
      height: 20rem;
    }
  }

  @media (min-width: 1024px) {
    .container {
      height: 24rem;
    }
  }
  
`
