import React from 'react';
import {Text} from 'react-native'
import {stylesSignUp} from '../../styles/stylesSignUp';

const ErrorPassword = () => {
  return (
    <>
      {true && (
        <Text style={stylesSignUp.errorText}>
          *Incorrect Email or Password
        </Text>
      )}
    </>
  );
};

export default ErrorPassword;
