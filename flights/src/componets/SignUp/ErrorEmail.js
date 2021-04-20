import React from 'react';
import {Text} from 'react-native';
import {stylesSignUp} from '../../styles/stylesSignUp';

const ErrorEmail = ({error}) => {
  return (
    <>
      {error && (
        <Text style={stylesSignUp.errorText}>
          *Email in use. Use a different Email
        </Text>
      )}
    </>
  );
};

export default ErrorEmail;
