import { useNavigation } from '@react-navigation/native'
import React from 'react';
import {Text, TouchableOpacity} from 'react-native'
import { stylesNewFlightGlobal } from '../../styles/newFlightsScreens/stylesNewFlightGlobal';


const BtnNext = ({nav,title}) => {
   const navigation = useNavigation()

    return (      
      <TouchableOpacity
        style={stylesNewFlightGlobal.btnNext}
        onPress={() => navigation.navigate(nav)}
      >
        <Text style={stylesNewFlightGlobal.btnText}>{title}</Text>
      </TouchableOpacity>
    );
};

export default BtnNext;