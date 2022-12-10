import React from 'react'
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTab } from './navigation/BottomTab'
import { StackNavegation } from './navigation/StackNavegation';

function App() {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  )
}

export default App
