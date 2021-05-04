import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import {stylesNewFlightGlobal} from '../../styles/newFlightsScreens/stylesNewFlightGlobal';

const InputCity = ({text, setText}) => {
  const [inputFocus, setInputFocus] = useState(false);
  return (
    <View style={stylesNewFlightGlobal.inputView}>
      <TextInput
        onFocus={() => setInputFocus(true)}
        onBlur={() => setInputFocus(false)}
        placeholder="Select location"
        value={text}
        onChangeText={setText}
        style={[
          stylesNewFlightGlobal.input,
          inputFocus ? {borderColor: '#5C6DF8'} : {borderColor: '#5E656F'},
        ]}
      />
    </View>
  );
};

export default InputCity;
