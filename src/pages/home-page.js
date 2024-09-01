import { LitElement, html, css } from 'lit';

export class HomePage extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html`<h1>Home Page</h1>`;
    }
}
customElements.define('home-page', HomePage);
