import { useNavigation } from '@react-navigation/native'
import React from 'react';
import {View, Image,TouchableOpacity} from 'react-native'
import { stylesNewFlightGlobal } from '../../styles/newFlightsScreens/stylesNewFlightGlobal';

const ArrowBlue = ({nav}) => {
    const navigate = useNavigation()
    return (
      <TouchableOpacity
        onPress={ () => navigate.navigate(nav)}
      >
        <Image
          source={require('../../../assets/icons/arrowLeft.png')}
          style={stylesNewFlightGlobal.arrow}
        />
      </TouchableOpacity>
    );
};

export default ArrowBlue;