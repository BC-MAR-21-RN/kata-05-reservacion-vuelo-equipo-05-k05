import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {Calendar as Calen} from 'react-native-calendars';
import {stylesNewFlightGlobal} from '../styles/newFlightsScreens/stylesNewFlightGlobal';
import ArrowBlue from '../componets/newFlight/ArrowBlue';
import InfoNewFlight from '../componets/newFlight/InfoNewFlight';
import {useNavigation} from '@react-navigation/core';
import {useDispatch} from 'react-redux';
import {departureDate} from '../actions/newFlightAction';

const Calendar = () => {
  const [date, setDate] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();

  console.log(date);

  const handleBtn = () => {
    dispatch(departureDate(date));
    return navigation.navigate('NumberOfPassengers');
  };

  return (
    <View style={stylesNewFlightGlobal.container}>
      <ArrowBlue nav={'WhereAreYou'} />
      <InfoNewFlight />
      <Text style={stylesNewFlightGlobal.questionAlternative}>Select Date</Text>
      <Calen
        // style={{height: 500}}
        markingType={'period'}
        // onDayPress={({dateString}) => {setDate(dateString)}}
        onDayPress={({dateString}) => {
          setDate(dateString);
        }}
        markedDates={
          date && {
            [date]: {
              selected: true,
              startingDay: true,
              endingDay: true,
              color: '#5C6DF8',
              textColor: 'white',
            },
          }
        }
      />
      <Button title={'next'} onPress={handleBtn} />
    </View>
  );
};

export default Calendar;
