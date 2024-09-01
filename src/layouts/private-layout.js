import { LitElement, html, css } from "lit";
import { AuthMixin } from "../mixins/auth-mixin";

export class PrivateLayout extends AuthMixin(LitElement) {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static styles = [
    css`
      :host {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100vh;
      }

      .header {
        background-color: #333;
        color: white;
        padding: 1rem;
        height: 5rem;
      }

      .main {
        flex: 1;
        padding: 1rem;
        height: auto;
      }

      .footer {
        background-color: #333;
        color: white;
        padding: 1rem;
        height: 5rem;
      }
    `,
  ];

  render() {
    return html`
      <div>
        <div class="header">
          <slot name="header"></slot>
        </div>
        <div class="main">
          <slot name="main"></slot>
        </div>
        <div class="footer">
          <slot name="footer"></slot>
        </div>
      </div>
    `;
  }
}
customElements.define("private-layout", PrivateLayout);

