import React from 'react';
import {View, Text, Button, KeyboardAvoidingView} from 'react-native';
import {stylesNewFlightGlobal} from '../styles/newFlightsScreens/stylesNewFlightGlobal';
import ArrowBlue from '../componets/newFlight/ArrowBlue';
import InputCity from '../componets/newFlight/InputCity';
import BtnNext from '../componets/newFlight/BtnNext';

const WhereAreYou = () => {

  return (
    <View style={stylesNewFlightGlobal.container}>
      <ArrowBlue nav={'MyFlights'}/>
      <Text style={stylesNewFlightGlobal.question}>Where are you now?</Text>
      <InputCity/>
        <BtnNext nav={'ToWhereYouGo'} title={'Next'}/>
    </View>
  );
};

export default WhereAreYou;
