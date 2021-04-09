import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const MyFlights = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Flight list</Text>
      <Button
        title="Create new flight"
        onPress={() => navigation.navigate('NewFlight')}
      />
    </View>
  );
};

export default MyFlights;
