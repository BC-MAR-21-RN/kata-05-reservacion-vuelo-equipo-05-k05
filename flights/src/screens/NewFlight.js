import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WhereAreYou from '../newFlyScreens/WhereAreYou';
import ToWhereYouGo from '../newFlyScreens/ToWhereYouGo';
import Calendar from '../newFlyScreens/Calendar';
import NumberOfPassengers from '../newFlyScreens/NumberOfPassengers';
import CreateNewFlyght from '../newFlyScreens/CreateNewFlyght';
import { NewFlightProvider } from '../context/NewFlightContext';
const Stack = createStackNavigator();

const NewFlight = () => {


  return (

    <NewFlightProvider>
      <Stack.Navigator initialRouteName="WhereAreYou" >
        <Stack.Screen name="WhereAreYou" component={WhereAreYou}  options={{headerShown: false}}/>
        <Stack.Screen name="ToWhereYouGo" component={ToWhereYouGo} options={{headerShown: false}}/>
        <Stack.Screen name="Calendar" component={Calendar} options={{headerShown: false}} />
        <Stack.Screen name="NumberOfPassengers" component={NumberOfPassengers} options={{headerShown: false}}/>
        <Stack.Screen name="CreateNewFlyght" component={CreateNewFlyght} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NewFlightProvider>
  );
};

export default NewFlight;
