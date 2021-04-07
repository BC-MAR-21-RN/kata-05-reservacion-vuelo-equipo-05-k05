import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ToWhereYouGo = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Where will you be flying to?</Text>
      <Button title="Next" onPress={() => navigation.navigate('Calendar')} />
    </View>
  );
};

export default ToWhereYouGo;
