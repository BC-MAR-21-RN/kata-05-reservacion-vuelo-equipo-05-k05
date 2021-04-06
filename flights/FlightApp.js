import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import SignUp from './src/screens/SignUp'

const Stack = createStackNavigator()

const FlightApp = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="SignUp" component={SignUp} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default FlightApp;
