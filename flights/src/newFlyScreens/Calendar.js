import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Calendar = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Select date</Text>
      <Button
        title="Next"
        onPress={() => navigation.navigate('NumberOfPassengers')}
      />
    </View>
  );
};

export default Calendar;
