import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BottomNavigation } from 'router';

export default function App() {
  return (
    <NavigationContainer>
      <BottomNavigation />
    </NavigationContainer>
  );
}
