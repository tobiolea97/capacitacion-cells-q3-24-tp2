import { LitElement, html, css } from 'lit';

export class ALertCOmponent extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html``;
    }
}
customElements.define('AlertComponent', ALertCOmponent);
