import { LitElement, html, css } from "lit";

export class PrivateLayout extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static styles = [
    css`
      :host {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100vh;
      }

      .header {
        background-color: #444;
        color: white;
        height: 10vh
      }

      .main {
        height: 80vh;
        display: flex;
        justify-content: center;
        align-items: start;
      }

      .footer {
        background-color: #ddd;
        color: white;
        height: 10vh;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `,
  ];

  render() {
    return html`
      <div>
        <div class="header">
          <slot name="header"></slot>
        </div>
        <div class="main">
          <slot name="main"></slot>
        </div>
        <div class="footer">
          <slot name="footer"></slot>
        </div>
      </div>
    `;
  }
}
customElements.define("private-layout", PrivateLayout);

