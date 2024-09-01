import { LitElement, html, css } from "lit";
import { PrivateLayout } from "../layouts/private-layout";
import { Router } from "@vaadin/router";

export class HomePage extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
        width: 100%;
      }

      h1,
      h2,
      h3,
      h4,
      p {
        margin: 0;
        padding: 0;
        color: #eee;
      }

      .header {
        margin: auto 2rem;
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        background-color: #444;
        color: white;
        height: 10vh;
      }

      .main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        max-width: 800px;
      }

      .footer a {
        color: #444;
        font-weight: bold
      }

      dile-nav {
        display: flex;
        gap: 2rem;
        align-items: center;
      }

      a {
        color: white;
        cursor: pointer;
      }

      img {
        width: 1.5rem;
        height: 1.5rem;
      }
    `,
  ];

  static get properties() {
    return {
      currentUser: { type: String },
    };
  }

  constructor() {
    super();
    this.currentUser = "John Doe";
  }

  logout() {
    Router.go("/login");
  }

  render() {
    return html`
      <private-layout>
        <div slot="header" class="header">
          <dile-nav>
            <a>Web Components</a>
            <a>Lit Element</a>
            <a>Cells</a>
            <a>|</a>
            <h4>Bienvenido, ${this.currentUser}</h4>
            <a @click="${this.logout}"><img src="logout.png" /></a>
          </dile-nav>
          <h2 slot="title">BBVA</h2>
        </div>
        <div slot="main" class="main">
          <h1>Home Page</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div slot="footer" class="footer">
          <a>Capacitacion Cells Q3 2024 | tobias.olea@bbva.com </a>
        </div>
      </private-layout>
    `;
  }
}
customElements.define("home-page", HomePage);

