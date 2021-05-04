import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Flight from '../componets/MyFLights/Flight';
//import dbflights from '../../dummydata/db.json';
import {stylesMyFlight} from '../styles/stylesMyFlights';
import LogOut from '../componets/SignUp/LogOut';
import auth from '@react-native-firebase/auth';
import LogIn from './LogIn';
import {login} from '../actions/auth';
import {useDispatch, useSelector} from 'react-redux';
import {startLoadingFlights} from '../actions/flightsAction';

const MyFlights = () => {
  const navigation = useNavigation();
  console.log(navigation)
  const dispatch = useDispatch();
  const data = useSelector(state => state.flights.flightsList);
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [userr, setUser] = useState();

  // Handle user state changes
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(async user => {
      if (user?.uid) {
        setUser(user);
        const uid = user._user.uid;
        dispatch(login(uid));
        setInitializing(true);
        dispatch(startLoadingFlights(uid));
      } else {
        setInitializing(false);
      }
    });
    return subscriber; // unsubscribe on unmount
  }, []);

  // if (initializing) {
  //   return null;
  // }

  if (!userr) {
    return <LogIn />;
  }

  return (
    <View style={stylesMyFlight.containerMyFlights}>
      <Text style={stylesMyFlight.titleMyflights}>My flights</Text>
      <LogOut />

      <View style={stylesMyFlight.containerListFlights}>
        <FlatList
          data={data} //dbflights.listFlights
          renderItem={({item}) => <Flight item={item} />}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <TouchableOpacity
        style={stylesMyFlight.btnNewFlight}
        onPress={() => navigation.navigate('newFlight')}>
        <Text style={stylesMyFlight.txtBtn}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyFlights;
