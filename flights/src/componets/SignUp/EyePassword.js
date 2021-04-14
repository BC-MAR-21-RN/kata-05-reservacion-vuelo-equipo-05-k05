import React, {useContext} from 'react';
import {Image} from 'react-native';
import {SignUpContext} from '../../context/SignUpContext';
import {stylesSignUp} from '../../styles/stylesSignUp';

const EyePassword = () => {
   const {isFocus} = useContext(SignUpContext);
  return (
    <Image
      style={stylesSignUp.eye}
      source={
         isFocus.focusPassword
          ? require('../../../assets/icons/visible-on.png')
          : require('../../../assets/icons/visible.png')
      }
    />
  );
};

export default EyePassword;
