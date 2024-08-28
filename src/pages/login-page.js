import { LitElement, html, css } from "lit";
import "../components/login-component.js";
import "../components/alert-component.js";

export class LoginPage extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  render() {
    return html`
      <login-component></login-component>
      <alert-component></alert-component>
    `;
  }
}
customElements.define("login-page", LoginPage);

