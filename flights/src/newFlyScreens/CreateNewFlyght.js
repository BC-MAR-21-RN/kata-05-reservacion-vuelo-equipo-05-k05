import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const CreateNewFlyght = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Create New Flight</Text>
      <Button title="Finish" onPress={() => navigation.navigate('MyFlights')} />
    </View>
  );
};

export default CreateNewFlyght;
