import React from 'react';
import {View, Text} from 'react-native';
import {stylesNewFlightGlobal} from '../styles/newFlightsScreens/stylesNewFlightGlobal';
import InfoNewFlight from '../componets/newFlight/InfoNewFlight';
import BtnNext from '../componets/newFlight/BtnNext';

const CreateNewFlyght = () => {
  return (
    <View style={stylesNewFlightGlobal.container}>
      <View style={{marginTop: 150}}>
        <InfoNewFlight />
      </View>
      <Text
        style={{fontSize: 28, fontWeight: 'bold', width: '70%', marginTop: 15}}>
        Your Request was received.
      </Text>
      <BtnNext nav={'MyFlights'} title={'Finish'} />
    </View>
  );
};

export default CreateNewFlyght;
