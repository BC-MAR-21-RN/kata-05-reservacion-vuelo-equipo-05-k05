import React from 'react';
import {StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SignUp from './src/screens/SignUp';
import LogIn from './src/screens/LogIn';
import MyFlights from './src/screens/MyFlights';
import NewFlight from './src/screens/NewFlight';
import {SignUpProvider} from './src/context/SignUpContext';

import {Provider} from 'react-redux';
import {store} from './src/store/store';

const Stack = createStackNavigator();

const FlightApp = () => {
  return (
    <Provider store={store}>
      <SignUpProvider>
        <NavigationContainer>
          <StatusBar barStyle="dark-content" backgroundColor="transparent" />
          <Stack.Navigator initialRouteName="SingUp">
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{headerShown: false}}
            />
            <Stack.Screen name="LogIn" component={LogIn} />
            <Stack.Screen
              name="MyFlights"
              component={MyFlights}
              options={{headerShown: false}}
            />
            <Stack.Screen name="NewFlight" component={NewFlight} />
          </Stack.Navigator>
        </NavigationContainer>
      </SignUpProvider>
    </Provider>
  );
};

export default FlightApp;
