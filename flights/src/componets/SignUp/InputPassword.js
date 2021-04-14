import React, {useContext} from 'react';
import {View, Text, Image} from 'react-native';
import {SignUpContext} from '../../context/SignUpContext';
import {stylesSignUp} from '../../styles/stylesSignUp';
import Input from '../SignUp/Input';

const InputPassword = () => {
  const {answer, isFocus} = useContext(SignUpContext);
  return (
    <View>
      <Text style={stylesSignUp.subTitle}>
        Password
        {true && (
          <Text style={stylesSignUp.errorText}>
            *Incorrect Email or Password
          </Text>
        )}
      </Text>
      <View
        style={[
          stylesSignUp.inputPassword,
          isFocus.focusPassword
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
        <Image
          style={stylesSignUp.eye}
          source={
            isFocus.focusPassword
              ? require('../../../assets/icons/visible-on.png')
              : require('../../../assets/icons/visible.png')
          }
        />
      </View>
    </View>
  );
};

export default InputPassword;
