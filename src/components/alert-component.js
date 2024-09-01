import { LitElement, html, css } from "lit";

export class AlertComponent extends LitElement {
  static get properties() {
    return {
      message: { type: String },
      type: { type: String }, // success, error, warning, info
    };
  }

  static styles = [
    css`
      :host {
        display: var(--display, block);
      }

      .alert {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        margin-top: 3rem;
        color: white;
        margin-bottom: 15px;
        min-width: auto;
        min-height: auto;
      }

      .alert.success {
        background-color: #4caf50;
      }
      .alert.info {
        background-color: #2196f3;
      }
      .alert.error {
        background-color: #CC5D61;
      }
    `,
  ];

  constructor() {
    super();
    this.message = "";
    this.type = "info";
  }

  updated(changedProperties) {
    if (changedProperties.has('message')) {
      this.style.setProperty('--display', this.message ? 'block' : 'none');
    }
  }

  render() {
    return html` <div class="alert ${this.type}">${this.message}</div> `;
  }
}
customElements.define("alert-component", AlertComponent);

