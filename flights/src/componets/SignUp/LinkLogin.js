import React from 'react';
import {View, Text} from 'react-native';
import {stylesSignUp} from '../../styles/stylesSignUp';
import {useNavigation} from '@react-navigation/native';

const LinkLogin = ({navScreen}) => {
  const navigation = useNavigation();
  return (
    <View style={stylesSignUp.txtLinkContainer}>
      <Text style={stylesSignUp.txtLink}>Already have an account? </Text>
      <Text
        style={stylesSignUp.link}
        onPress={() => navigation.navigate(navScreen)}>
        Log In
      </Text>
    </View>
  );
};

export default LinkLogin;
