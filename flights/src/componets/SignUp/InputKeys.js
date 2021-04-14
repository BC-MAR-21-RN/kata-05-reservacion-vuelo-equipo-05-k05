import React from 'react';
import {View, Text} from 'react-native';
import {stylesSignUp} from '../../styles/stylesSignUp';
import Input from '../SignUp/Input';
import ErrorEmail from '../SignUp/ErrorEmail';

const InputKeys = ({title, keyFocus, keyName, valueFocus, name}) => {
  return (
    <View>
      <Text style={stylesSignUp.subTitle}>
        {title}
        {keyFocus === 'focusEmail' && <ErrorEmail error={true} />}
      </Text>
      <Input
        name={name}
        keyFocus={keyFocus}
        keyName={keyName}
        valueFocus={valueFocus}
      />
    </View>
  );
};

export default InputKeys;
