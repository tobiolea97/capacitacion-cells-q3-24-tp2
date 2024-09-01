import { LitElement, html, css } from "lit";

export class PublicLayout extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static styles = [
    css`
      :host {
        display: block;
      }
      .public-layout {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }
    `,
  ];

  render() {
    return html`
      <div class="public-layout">
        <slot></slot>
        <!--
        <slot name="header"></slot>
        <slot name="footer"></slot>
        -->
      </div>
    `;
  }
}
customElements.define("public-layout", PublicLayout);

