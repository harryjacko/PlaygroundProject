// Required for react-navigation
// Don't remove. Ref: https://reactnavigation.org/docs/stack-navigator
import 'react-native-gesture-handler';

import React from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import RootNavigator from './src/root/RootNavigator';

/**
 * FIXME:
 *  Aliases
 *  Navigation types
 *  Screen setup
 *  More? I should setup a boiler plate project with all the things
 */

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <StatusBar />
      <RootNavigator />
    </SafeAreaProvider>
  );
}

export default App;
