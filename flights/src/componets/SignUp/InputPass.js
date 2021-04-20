import React, {useContext} from 'react';
import {View} from 'react-native';
import {SignUpContext} from '../../context/SignUpContext';
import {stylesSignUp} from '../../styles/stylesSignUp';
import Input from './Input';
import EyePassword from './EyePassword';

const InputPass = () => {
   const {answer, isFocus} = useContext(SignUpContext)
  return (
    <View
      style={[
        stylesSignUp.inputPass,
         (isFocus.focusPassword)        
          ? {borderColor: '#5C6DF8'}
          : {borderColor: '#5E656F'},
      ]}>
      <Input
        name={answer.password}
        keyFocus={'focusPassword'}
        keyName={'password'}
        valueFocus={isFocus.focusPassword}
        secureTextEntry={true}
      />
      <EyePassword/>
    </View>
  );
};

export default InputPass;
