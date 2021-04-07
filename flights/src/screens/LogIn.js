import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const LogIn = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Log In</Text>
      <Button title="Login" onPress={() => navigation.navigate('MyFlights')} />
    </View>
  );
};

export default LogIn;
