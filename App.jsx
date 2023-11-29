import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ContactStack from './app/pages/ContactStack';

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <ContactStack/>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App;
