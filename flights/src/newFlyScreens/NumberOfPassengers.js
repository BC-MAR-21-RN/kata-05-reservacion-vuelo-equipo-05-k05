import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const NumberOfPassengers = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>How many passengers?</Text>
      <Button
        title="Next"
        onPress={() => navigation.navigate('CreateNewFlyght')}
      />
    </View>
  );
};

export default NumberOfPassengers;
