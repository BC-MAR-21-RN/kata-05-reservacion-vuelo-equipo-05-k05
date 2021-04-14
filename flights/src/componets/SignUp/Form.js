import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {SignUpContext} from '../../context/SignUpContext';
import {stylesSignUp} from '../../styles/stylesSignUp';
import InputPassword from './InputPassword';
import InputKeys from '../SignUp/InputKeys';

const Form = () => {
  const {answer, isFocus} = useContext(SignUpContext);
  return (
    <View style={stylesSignUp.form}>
      {/* name */}
      <InputKeys
        name={answer.name}
        title={'First Name'}
        keyFocus={'focusName'}
        keyName={'name'}
        valueFocus={isFocus.focusName}
      />
      {/* email */}
      <InputKeys
        name={answer.email}
        title={'Email '}
        keyFocus={'focusEmail'}
        keyName={'email'}
        valueFocus={isFocus.focusEmail}
      />
      {/* password */}
      <InputPassword />
      <Text style={stylesSignUp.txtReqPass}>
        Use 8 or more characters with a mix of letters, numbers, and symbols.
      </Text>
    </View>
  );
};

export default Form;
