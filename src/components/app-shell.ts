import { LitElement, html } from 'lit';

import './test-query-component';

export class AppShell extends LitElement {
  // Render the UI as a function of component state
  render() {
    return html`
      <test-query-component></test-query-component>
    `;
  }
}

customElements.define('app-shell', AppShell);
