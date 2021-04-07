import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const SignUp = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Form to register</Text>
      <Button
        title="Sign Up"
        onPress={() => navigation.navigate('MyFlights')}
      />
      <Button title="Login" onPress={() => navigation.navigate('LogIn')} />
    </View>
  );
};

export default SignUp;
