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
        display: block;
      }

      .alert {
        padding: 20px;
        background-color: #f44336;
        color: white;
        margin-bottom: 15px;
        position: fixed;
        top: 20%;
        left: 50%;
        transform: translate(-50%, -50%);
        min-width: 300px;
        min-height: 50px;
      }

      .alert.success {
        background-color: #4caf50;
      }
      .alert.info {
        background-color: #2196f3;
      }
      .alert.warning {
        background-color: #ff9800;
      }
    `,
  ];

  constructor() {
    super();
    this.message = "";
    this.type = "info";
  }

  render() {
    return html` <div class="alert ${this.type}">${this.message}</div> `;
  }
}
customElements.define("alert-component", AlertComponent);

