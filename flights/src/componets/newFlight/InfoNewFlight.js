import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  getCodeFirstCity,
  getCodeSecondCity,
} from '../../actions/newFlightAction';
import {stylesInfoFlight} from '../../styles/newFlightsScreens/stylesInfoFlight';

const InfoNewFlight = () => {
  const dispatch = useDispatch();

  const info = useSelector(state => state.newFlight);

  useEffect(() => {
    const countryApi = async () => {
      const api = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${info.countryDeparture}&appid=6a37bb4064db2155ed9a77e01d30a66a`,
      );
      const {sys} = await api.json();
      const cityCode = await sys.country;
      dispatch(getCodeFirstCity(cityCode));
    };
    const countryApi2 = async () => {
      const api = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${info.countryArrival}&appid=6a37bb4064db2155ed9a77e01d30a66a`,
      );
      const {sys} = await api.json();
      const cityCode2 = await sys.country;
      dispatch(getCodeSecondCity(cityCode2));
    };
    countryApi();
    countryApi2();
  }, []);

  return (
    <View style={stylesInfoFlight.containerFlight}>
      <View style={stylesInfoFlight.titleAbr}>
        <Text style={stylesInfoFlight.textAbr}>{info.cityDepartureAbr}</Text>
        <Image
          style={stylesInfoFlight.iconPlane}
          source={require('../../../assets/icons/blue-airplane.png')}
        />
        <Text style={stylesInfoFlight.textAbr}>{info.cityArrivalAbr}</Text>
      </View>
      <View style={stylesInfoFlight.country}>
        <Text style={stylesInfoFlight.textCountry}>
          {info.countryDeparture}
        </Text>
        <Text style={stylesInfoFlight.textCountry}>{info.countryArrival}</Text>
      </View>
      <View style={stylesInfoFlight.date}>
        <Text style={stylesInfoFlight.textPassDate}>
          {info.departureDate && info.departureDate}
        </Text>
        <Text style={stylesInfoFlight.textPassDate}>
          {info.passengers && `${info.passengers} Passangers`}
        </Text>
      </View>
    </View>
  );
};

export default InfoNewFlight;
