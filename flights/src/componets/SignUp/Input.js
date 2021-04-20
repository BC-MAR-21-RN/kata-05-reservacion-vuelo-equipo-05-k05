import React, {useContext} from 'react';
import {TextInput} from 'react-native';
import {SignUpContext} from '../../context/SignUpContext';
import {stylesSignUp} from '../../styles/stylesSignUp';

const Input = ({name, keyFocus, keyName, valueFocus}) => {
   const {isFocus, setIsFocus, handleInputText} = useContext(SignUpContext);
  return (
    <TextInput
      value={name}
      onChangeText={text => handleInputText(keyName, text)}
      onFocus={() =>
        setIsFocus({
          ...isFocus,
          [keyFocus]: true,
        })
      }
      onBlur={() =>
        setIsFocus({
          ...isFocus,
          [keyFocus]: false,
        })
      }
      style={
         keyName === 'password'
          ? [stylesSignUp.passwordWidth]
          : [
              stylesSignUp.inputText,
               valueFocus ? {borderColor: '#5C6DF8'} : {borderColor: '#5E656F'},
            ]
      }
    />
  );
};

export default Input;
