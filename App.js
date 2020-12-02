/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StatusBar } from 'react-native';
import Navigation from '@navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="#f0f2fc" barStyle="dark-content" />
      <Navigation />
    </SafeAreaProvider>
  );
}

export default App;
