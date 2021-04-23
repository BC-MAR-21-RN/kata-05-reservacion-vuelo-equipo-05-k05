import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {Calendar as Cal} from 'react-native-calendars';
import {stylesNewFlightGlobal} from '../styles/newFlightsScreens/stylesNewFlightGlobal';
import ArrowBlue from '../componets/newFlight/ArrowBlue';
import InfoNewFlight from '../componets/newFlight/InfoNewFlight';
import BtnNext from '../componets/newFlight/BtnNext';
import { useNavigation } from '@react-navigation/core';

const Calendar = () => {
  const [date, setDate] = useState('');
  const navigation = useNavigation()
  return (
    <View style={stylesNewFlightGlobal.container}>
      <ArrowBlue nav={'WhereAreYou'} />
      <InfoNewFlight />
      <Text style={stylesNewFlightGlobal.questionAlternative}>Select Date</Text>
      <Cal
        // style={{height: 200}}
        markingType={'period'}
        onDayPress={({dateString}) => setDate(dateString)}
        markedDates={{
          [date]: {
            selected: true,
            startingDay: true,
            endingDay: true,
            color: '#5C6DF8',
            textColor: 'white',
          },
        }}
      />
      <Button title={'next'} onPress={() => navigation.navigate('NumberOfPassengers') }/>
      {/* <BtnNext nav={'NumberOfPassengers'} title={'Next'} /> */}
    </View>
  );
};

export default Calendar;
