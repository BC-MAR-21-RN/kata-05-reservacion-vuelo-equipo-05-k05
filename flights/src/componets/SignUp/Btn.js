import React, {useContext} from 'react';
import {TouchableOpacity, Image, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SignUpContext} from '../../context/SignUpContext';
import {stylesSignUp} from '../../styles/stylesSignUp';

const Btn = ({navScreen, title}) => {
   const navigation = useNavigation();
   const {disabled} = useContext(SignUpContext);

  return (
    <TouchableOpacity
      disabled={disabled} //true
      style={disabled ? stylesSignUp.btnGoogleDisable : stylesSignUp.btnGoogle}
      title={title}
      onPress={() => navigation.navigate(navScreen)}
      >
      {navScreen === 'MyFlights' ? (
        <Text style={stylesSignUp.btnTxt}>Sign Up</Text>
      ) : (
        <>
          <Image
            style={stylesSignUp.iconGoogle}
            source={require('../../../assets/icons/google-logo.png')}
          />
          <Text style={stylesSignUp.btnTxt}>Sign Up with Google</Text>
        </>
      )}
    </TouchableOpacity>
  );
};

export default Btn;
