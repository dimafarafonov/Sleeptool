/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { HomeScreen } from './src/screens/Home';
import { name as appName } from './app.json';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://flyby-router-demo.herokuapp.com/',
  cache: new InMemoryCache(),
});

export default App = () => {
  return (
    <ApolloProvider client={client}>
      <HomeScreen />
    </ApolloProvider>
  );
};

AppRegistry.registerComponent(appName, () => App);
// starting fabric with next session, for now a bit exhausted
// surfing though fabric docs, the same as turbo modules, will everything all together later