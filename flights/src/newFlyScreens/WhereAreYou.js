import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {stylesNewFlightGlobal} from '../styles/newFlightsScreens/stylesNewFlightGlobal';
import ArrowBlue from '../componets/newFlight/ArrowBlue';
import InputCity from '../componets/newFlight/InputCity';
import BtnNext from '../componets/newFlight/BtnNext';

const WhereAreYou = () => {
  const [text, setText] = useState('');
  return (
    <View style={stylesNewFlightGlobal.container}>
      <ArrowBlue nav={'MyFlights'} />
      <Text style={stylesNewFlightGlobal.question}>Where are you now?</Text>
      <InputCity text={text} setText={setText} />
      <BtnNext nav={'ToWhereYouGo'} title={'Next'} text={text} />
    </View>
  );
};

export default WhereAreYou;
