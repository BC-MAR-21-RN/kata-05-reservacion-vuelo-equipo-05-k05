import React from 'react';
import {View, Text} from 'react-native';
import {stylesSignUp} from '../../styles/stylesSignUp';
import ErrorPassword from './ErrorPassword';
import InputPass from './InputPass';

const InputKeyPassword = () => {
  return (
    <View>
      <Text style={stylesSignUp.subTitle}>
        Password
        <ErrorPassword />
      </Text>
      <InputPass />
    </View>
  );
};

export default InputKeyPassword;
