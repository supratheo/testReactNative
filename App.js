import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PlateauScreen from './screens/PlateauScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Plateau" component={PlateauScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
