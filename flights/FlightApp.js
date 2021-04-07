import React from 'react';
import {StatusBar} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import SignUp from './src/screens/SignUp';
import LogIn from './src/screens/LogIn';
import MyFlights from './src/screens/MyFlights';
import NewFlight from './src/screens/NewFlight';

const Stack = createStackNavigator();

const FlightApp = () => {
  return (
    
    <NavigationContainer>
      <StatusBar
        barStyle='dark-content' 
        backgroundColor = 'white'
        hidden = {false}
        translucent = {false}
      />
      
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}}  />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="MyFlights" component={MyFlights} />
        <Stack.Screen name="NewFlight" component={NewFlight} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default FlightApp;
