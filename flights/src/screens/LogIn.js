import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import Btn from '../componets/SignUp/Btn';
import InputKeyPassword from '../componets/SignUp/InputKeyPassword';
import InputKeys from '../componets/SignUp/InputKeys';
import LinkLogin from '../componets/SignUp/LinkLogin';
import {SignUpContext} from '../context/SignUpContext';
import {stylesSignUp} from '../styles/stylesSignUp';

const LogIn = () => {
  const {answer, isFocus} = useContext(SignUpContext);

  return (
    <View style={stylesSignUp.container}>
      <Text style={stylesSignUp.title}>Log In</Text>
      {/* form */}
      <InputKeys
        name={answer.email}
        title={'Email'}
        keyFocus={'focusEmail'}
        keyName={'email'}
        valueFocus={isFocus.focusEmail}
      />
      <InputKeyPassword />
      <Text style={stylesSignUp.txtReqPass}>
        Use 8 or more characters with a mix of letters, numbers, and symbols.
      </Text>
      {/* button*/}
      <Btn
        navScreen={'MyFlights'}
        title={'MyFlights'}
        login={'loginScreen'}
        btnTitle={'Log in'}
      />
      {/* LinkLogin */}
      <LinkLogin navScreen={'SignUp'} />
    </View>
  );
};

export default LogIn;
