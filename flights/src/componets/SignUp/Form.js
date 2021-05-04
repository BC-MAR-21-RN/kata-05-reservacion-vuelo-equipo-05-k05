import React from 'react';
import {View, Text} from 'react-native';
import {stylesSignUp} from '../../styles/stylesSignUp';
import InputKeyPassword from './InputKeyPassword';
import TwoInputKeys from './TwoInputKeys';

const Form = () => {
  return (
    <View style={stylesSignUp.form}>
      {/* name */}
      {/* email */}
      <TwoInputKeys />

      {/* password */}
      <InputKeyPassword />
      <Text style={stylesSignUp.txtReqPass}>
        Use 8 or more characters with a mix of letters, numbers, and symbols.
      </Text>
    </View>
  );
};

export default Form;
