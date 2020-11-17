import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BottomNavigation } from './src/router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <BottomNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
