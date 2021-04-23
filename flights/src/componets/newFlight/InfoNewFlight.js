import React from 'react';
import {View, Text, Image} from 'react-native';
import {stylesInfoFlight} from '../../styles/newFlightsScreens/stylesInfoFlight'


const InfoNewFlight = () => {
    return (
        <View style={stylesInfoFlight.containerFlight}>
            <View style={stylesInfoFlight.titleAbr}>
                <Text style={stylesInfoFlight.textAbr}>BEG</Text>
                <Image
                    style={stylesInfoFlight.iconPlane}
                    source={require('../../../assets/icons/blue-airplane.png')}
                />
                <Text style={stylesInfoFlight.textAbr}>AMS</Text>
            </View>
            <View style={stylesInfoFlight.country}>
                <Text style={stylesInfoFlight.textCountry}>serbia</Text>
                <Text style={stylesInfoFlight.textCountry}>Nederlans</Text>
            </View>
            <View style={stylesInfoFlight.date}>
                <Text style={stylesInfoFlight.textPassDate}>septiembre 3, 2020</Text>
                <Text style={stylesInfoFlight.textPassDate}>
                2 passengers
                </Text>
            </View>
        </View>
        
    );
};

export default InfoNewFlight;