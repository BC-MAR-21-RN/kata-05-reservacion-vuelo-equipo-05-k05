import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {stylesNewFlightGlobal} from '../styles/newFlightsScreens/stylesNewFlightGlobal';
import ArrowBlue from '../componets/newFlight/ArrowBlue';
import InputCity from '../componets/newFlight/InputCity';
import BtnNext from '../componets/newFlight/BtnNext';
import InfoNewFlight from '../componets/newFlight/InfoNewFlight';

const ToWhereYouGo = () => {
  const [text, setText] = useState('');
  return (
    <View style={stylesNewFlightGlobal.container}>
      <ArrowBlue nav={'WhereAreYou'} />
      <InfoNewFlight />
      <Text style={[stylesNewFlightGlobal.question, {width: '80%'}]}>
        Where Will be You flying to?
      </Text>
      <InputCity text={text} setText={setText} />
      <BtnNext nav={'Calendar'} title={'Next'} text={text} />
    </View>
  );
};

export default ToWhereYouGo;
