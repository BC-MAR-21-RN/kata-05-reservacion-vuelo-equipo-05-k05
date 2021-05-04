import React from 'react';
import {Text} from 'react-native';
import {stylesSignUp} from '../../styles/stylesSignUp';

const ErrorEmail = ({error}) => {
  return (
    <>
      {error && (
        <Text style={stylesSignUp.errorText}>
          *Email in use. or user not foud
        </Text>
      )}
    </>
  );
};

export default ErrorEmail;
