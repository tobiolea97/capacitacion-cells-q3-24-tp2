import { LitElement, html, css } from "lit";
import { PrivateLayout } from "../layouts/private-layout";

export class HomePage extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  render() {
    return html`
      <private-layout>
        <dile-nav>
          <h2 slot="title">Nav title</h2>
          <span slot="menu">[x]</span>
          <span slot="actions">Create</span>
        </dile-nav>
      </private-layout>
    `;
  }
}
customElements.define("home-page", HomePage);

