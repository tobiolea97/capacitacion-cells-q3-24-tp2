import { LitElement, html, css } from "lit";

export class LoginComponent extends LitElement {
  static get properties() {
    return {
      username: { type: String },
      password: { type: String },
    };
  }

  constructor() {
    super();
    this.username = "";
    this.password = "";
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

  _handleSubmit(event) {
    event.preventDefault();
    if (this.username === "admin" && this.password === "admin") {
      this._fireEvent("login", { username: this.username });
    }
  }

  _handleInput(event) {
    const { name, value } = event.target;
    this[name] = value;
  }

  _fireEvent(eventName, detail) {
    this.dispatchEvent(
      new CustomEvent(eventName, { detail, bubbles: true, composed: true })
    );
  }

  render() {
    return html`
      <form id="formLogin" @submit=${this._handleSubmit}>
        <label for="username">Username</label>
        <input
          @input=${this._handleInput}
          type="text"
          id="username"
          name="username"
        />
        <label for="password">Password</label>
        <input
          @input=${this._handleInput}
          type="password"
          id="password"
          name="password"
        />
        <button type="submit">Login</button>
      </form>
    `;
  }
}
customElements.define("login-component", LoginComponent);

