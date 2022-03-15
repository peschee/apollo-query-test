import { html, PropertyValues } from 'lit';
import { ApolloQuery } from '@apollo-elements/lit-apollo';
import { gql } from '@apollo/client/core';
import { state } from 'lit/decorators.js';

const query = gql`
query {
  launchesPast(limit: 10) {
    mission_name
  }
}
`;

export class TestQueryComponent extends ApolloQuery<any, unknown> {
  query = query;

  @state()
  launches: string[] = [];

  @state()
  name?: string;

  // Render the UI as a function of component state
  render() {
    return html`
      <p>Hello, world…</p>
      ${this.launches.map((l) => html`<p>${l}</p>`)}
    `;
  }

  connectedCallback() {
    super.connectedCallback && super.connectedCallback();
    setTimeout(() => {
      this.name = 'foo';
    }, 1000);
  }

  protected updated(changedProperties: PropertyValues) {
    super.updated(changedProperties);

    console.log("changedProperties.has('data')", changedProperties.has('data'));
    console.log('this.data', this.data);

    console.log("changedProperties.has('name')", changedProperties.has('name'));
    console.log('this.name', this.name);

    if (changedProperties.has('data') && this.data) {
      const { launchesPast = [] } = this.data || {};
      this.launches = launchesPast.map((l: any) => l.mission_name);
    }
  }
}

customElements.define('test-query-component', TestQueryComponent);
