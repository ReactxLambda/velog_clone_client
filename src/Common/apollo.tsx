import { ApolloClient, createHttpLink } from '@apollo/client';
import { InMemoryCache } from '@apollo/client';

export const cache = new InMemoryCache();

const httpLink = createHttpLink({
  uri: 'https://wv96wlsyt4.execute-api.ap-northeast-2.amazonaws.com/stage/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: cache,
});

export default client;
