import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import InfoNewFlight from '../componets/newFlight/InfoNewFlight';
import {stylesNumber} from '../styles/newFlightsScreens/stylesNumber';
import {stylesNewFlightGlobal} from '../styles/newFlightsScreens/stylesNewFlightGlobal';
import Picker from '@gregfrench/react-native-wheel-picker';
import ArrowBlue from '../componets/newFlight/ArrowBlue';
import BtnNext from '../componets/newFlight/BtnNext';
const PickerItem = Picker.Item;

const NumberOfPassengers = () => {
  const [selectedItem, setSelectedItem] = useState(2);
  const [itemList, setItemList] = useState(['1','2','3','4','5','6','7','8','8','9']);

  return (
    <View style={stylesNewFlightGlobal.container}>
      <ArrowBlue nav={'Calendar'} />
      <InfoNewFlight />
      <Text style={{fontSize: 28, fontWeight: 'bold', marginTop: 10}}>
        How many passengers?
      </Text>
      <Image
        style={stylesNumber.arrowLeft}
        source={require('../../assets/icons/arrowNumLeft.png')}
      />
      <Picker
        style={stylesNumber.pikerNum}
        selectedValue={selectedItem}
        itemStyle={{color: 'black', fontSize: 30}}
        onValueChange={index => setSelectedItem(index)}
        lineColor="#f1f1">
        {itemList.map((value, i) => (
          <PickerItem label={value} value={i} key={i} />
        ))}
      </Picker>
      <Image
        style={stylesNumber.arrowRight}
        source={require('../../assets/icons/arrowNumRight.png')}
      />
      <BtnNext nav={'CreateNewFlyght'} title={'Next'} />
    </View>
  );
};

export default NumberOfPassengers;
