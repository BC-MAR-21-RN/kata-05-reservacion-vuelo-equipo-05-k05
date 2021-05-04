import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {stylesSignUp} from '../../styles/stylesSignUp';
import ErrorPassword from './ErrorPassword';
import InputPass from './InputPass';

const InputKeyPassword = () => {
  const err = useSelector(state => state.ui.errorPassword);
  return (
    <View>
      <Text style={stylesSignUp.subTitle}>
        Password
        <ErrorPassword error={err} />
      </Text>
      <InputPass />
    </View>
  );
};

export default InputKeyPassword;
