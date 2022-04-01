import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './navigation/stacks/main.stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
