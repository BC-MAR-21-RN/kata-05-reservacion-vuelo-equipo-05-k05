import React from 'react';
import {View, Text, Image} from 'react-native';
import {stylesMyFlight} from '../../styles/stylesMyFlights';

const Flight = ({item}) => {
  return (
    <View style={stylesMyFlight.containerFlight}>
      <View style={stylesMyFlight.titleAbr}>
        <Text style={stylesMyFlight.textAbr}>{item.cityDepartureAbr}</Text>
        <Image
          style={stylesMyFlight.iconPlane}
          source={require('../../../assets/icons/blue-airplane.png')}
        />
        <Text style={stylesMyFlight.textAbr}>{item.cityArrivalAbr}</Text>
      </View>
      <View style={stylesMyFlight.country}>
        <Text style={stylesMyFlight.textCountry}>{item.countryDeparture}</Text>
        <Text style={stylesMyFlight.textCountry}>{item.countryArrival}</Text>
      </View>
      <View style={stylesMyFlight.date}>
        <Text style={stylesMyFlight.textPassDate}>{item.departureDate}</Text>
        <Text style={stylesMyFlight.textPassDate}>
          {item.passengers} passengers
        </Text>
      </View>
    </View>
  );
};

export default Flight;
