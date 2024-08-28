import { LitElement, html, css } from "lit";

export class LoginComponent extends LitElement {
  static get properties() {
    return {
      username: { type: String },
      password: { type: String },
    };
  }

  static styles = [
    css`
      :host {
        display: block;
      }
      form {
        display: flex;
        flex-direction: column;
        width: 300px;
        margin: 0 auto;
      }
      label {
        margin-bottom: 5px;
        color: white;
      }
      input {
        padding: 5px;
        margin-bottom: 10px;
      }
      button {
        padding: 5px;
        background-color: #3498db;
        color: white;
        border: none;
        cursor: pointer;
      }
    `,
  ];

  render() {
    return html`
      <form id="formLogin">
        <label for="username">Username</label>
        <input type="text" id="username" name="username" />
        <label for="password">Password</label>
        <input type="password" id="password" name="password" />
        <button type="submit">Login</button>
      </form>
    `;
  }
}
customElements.define("login-component", LoginComponent);

