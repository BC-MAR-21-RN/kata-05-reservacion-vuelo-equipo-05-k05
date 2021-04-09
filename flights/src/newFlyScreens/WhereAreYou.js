import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const WhereAreYou = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Where are you now?</Text>
      <Button
        title="Next"
        onPress={() => navigation.navigate('ToWhereYouGo')}
      />
    </View>
  );
};

export default WhereAreYou;
