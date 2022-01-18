/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import MainApp from './router';

const App = () => {
  return (
    <NavigationContainer>
      <MainApp />
    </NavigationContainer>
  );
};

export default App;
