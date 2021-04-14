import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Flight from '../componets/MyFLights/Flight';
import dbflights from '../../dummydata/db.json';
import {stylesMyFlight} from '../styles/stylesMyFlights';

const MyFlights = () => {
  const navigation = useNavigation();
  return (
    <View style={stylesMyFlight.containerMyFlights}>
      <Text style={stylesMyFlight.titleMyflights}>My flights</Text>
      <View style={stylesMyFlight.containerListFlights}>
        <FlatList
          data={dbflights.listFlights}
          renderItem={({item}) => <Flight item={item} />}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <TouchableOpacity
        style={stylesMyFlight.btnNewFlight}
        onPress={() => navigation.navigate('NewFlight')}>
        <Text style={stylesMyFlight.txtBtn}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyFlights;
