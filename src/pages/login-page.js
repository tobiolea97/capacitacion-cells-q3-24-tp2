import { LitElement, html, css } from "lit";
import "../components/login-component.js";
import "../components/alert-component.js";
import "../layouts/public-layout.js";
import { state } from "lit/decorators.js";

export class LoginPage extends LitElement {
  static get properties() {
    return {
      _alertMessage: { type: String, state: true },
      _alertType: { type: String, state: true },
    };
  }

  constructor() {
    super();
    this._alertMessage = "";
    this._alertType = "";
  }

  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  _handleLoginSuccess(event) {
    const { username } = event.detail;
    const alertComponent = this.shadowRoot.querySelector("alert-component");
    this._alertMessage = `Welcome, ${username}`;
    this._alertType = "success";
  }

  _handleLoginError(event) {
    const alertComponent = this.shadowRoot.querySelector("alert-component");
    this._alertMessage = "Invalid username or password";
    this._alertType = "error";
  }

  render() {
    return html`
      <public-layout>
        <login-component
          @login-component:login-success=${this._handleLoginSuccess}
          @login-component:login-error=${this._handleLoginError}
        ></login-component>
        <alert-component .message=${this._alertMessage} .type=${this._alertType}></alert-component>
      </public-layout>
    `;
  }
}
customElements.define("login-page", LoginPage);

