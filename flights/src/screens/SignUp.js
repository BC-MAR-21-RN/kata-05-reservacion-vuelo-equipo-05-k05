import React from 'react';
import {View, Text} from 'react-native';
import {stylesSignUp} from '../styles/stylesSignUp';
import Form from '../componets/SignUp/Form';
import TwoCheckbox from '../componets/SignUp/TwoCheckbox';
import TwoButtos from '../componets/SignUp/TwoButtos';
import LinkLogin from '../componets/SignUp/LinkLogin';

const SignUp = () => {
  return (
    <View style={stylesSignUp.container}>
      <Text style={stylesSignUp.title}>Sign Up</Text>
      {/* form */}
      <Form />
      {/* checkboxes */}
      <TwoCheckbox />
      {/* buttons*/}
      <TwoButtos />
      {/* LinkLogin */}
      <LinkLogin navScreen={'LogIn'} />
    </View>
  );
};

export default SignUp;
