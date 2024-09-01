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
    return html` <private-layout></private-layout> `;
  }
}
customElements.define("home-page", HomePage);

