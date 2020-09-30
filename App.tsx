import React from 'react';
import { StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import IndexScreen from './src/screens/IndexScreen';

const client = new ApolloClient({
  uri: 'http://878e1c658db6.ngrok.io/graphql',
  cache: new InMemoryCache(),
});

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Notice',
    },
  },
);

const App = createAppContainer(navigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default () => {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
};
