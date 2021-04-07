import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import WhereAreYou from '../newFlyScreens/WhereAreYou';
import ToWhereYouGo from '../newFlyScreens/ToWhereYouGo';
import Calendar from '../newFlyScreens/Calendar';
import NumberOfPassengers from '../newFlyScreens/NumberOfPassengers';
import CreateNewFlyght from '../newFlyScreens/CreateNewFlyght';

const Stack = createStackNavigator();

const NewFlight = () => {
  return (
    <Stack.Navigator initialRouteName="WhereAreYou">
      <Stack.Screen name="WhereAreYou" component={WhereAreYou} />
      <Stack.Screen name="ToWhereYouGo" component={ToWhereYouGo} />
      <Stack.Screen name="Calendar" component={Calendar} />
      <Stack.Screen name="NumberOfPassengers" component={NumberOfPassengers} />
      <Stack.Screen name="CreateNewFlyght" component={CreateNewFlyght} />
    </Stack.Navigator>
  );
};

export default NewFlight;
