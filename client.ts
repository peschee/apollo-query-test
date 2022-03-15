import {
  ApolloClient,
  from,
  HttpLink,
  InMemoryCache,
} from '@apollo/client/core';

const httpLink = new HttpLink({
  uri: 'https://api.spacex.land/graphql',
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([httpLink]),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'network-only',
    },
    mutate: {
      fetchPolicy: 'network-only',
    },
    query: {
      fetchPolicy: 'network-only',
    },
  },
});
