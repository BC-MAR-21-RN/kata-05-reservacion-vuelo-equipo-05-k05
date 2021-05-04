import React from 'react';
import {View, Text} from 'react-native';
import {stylesSignUp} from '../../styles/stylesSignUp';
import Btn from './Btn';

const TwoButtos = () => {
  return (
    <>
      <Btn navScreen={'MyFlights'} title={'MyFlights'} btnTitle={'Sign Up'} />
      <View style={stylesSignUp.or}>
        <Text>or</Text>
      </View>
      <Btn navScreen={'LogIn'} title={'Login'} />
    </>
  );
};

export default TwoButtos;
