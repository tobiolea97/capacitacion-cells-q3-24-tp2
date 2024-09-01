import { LitElement, html, css } from "lit";
import "../components/login-component.js";
import "../components/alert-component.js";
import "../layouts/public-layout.js";
import { state } from "lit/decorators.js";

export class LoginPage extends LitElement {
  static get properties() {
    return {
      _alertMessage: { type: String, state: true },
    };
  }

  constructor() {
    super();
    this._alertMessage = "";
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
    alertComponent.message = `Welcome, ${username}`;
    alertComponent.type = "success";
  }

  _handleLoginError(event) {
    const alertComponent = this.shadowRoot.querySelector("alert-component");
    alertComponent.message = "Invalid username or password";
    alertComponent.type = "error";
  }

  render() {
    return html`
      <public-layout>
        <login-component
          @login-component:login-success=${this._handleLoginSuccess}
          @login-component:login-error=${this._handleLoginError}
        ></login-component>
        <alert-component .message=${this._alertMessage}></alert-component>
      </public-layout>
    `;
  }
}
customElements.define("login-page", LoginPage);

