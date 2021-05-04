import React, {useContext, useEffect} from 'react';
import {TouchableOpacity, Image, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SignUpContext} from '../../context/SignUpContext';
import {stylesSignUp} from '../../styles/stylesSignUp';
import {useDispatch} from 'react-redux';
import {
  LogInWithEmailAndPassWord,
  startRegisterWithEmailPasswordName,
} from '../../actions/auth';

const Btn = ({navScreen, title, btnTitle}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {disabled, setDisable, answer} = useContext(SignUpContext);
  const {name, password, email} = answer;

  useEffect(() => {
    if (
      btnTitle === 'Log in' &&
      email.trim().length > 1 &&
      password.trim().length > 1
    ) {
      setDisable(false);
    }
  }, [answer]);

  const handleSigninOrLogin = () => {
    if (btnTitle === 'Log in') {
      dispatch(LogInWithEmailAndPassWord(email, password));
    } else if (btnTitle === 'Sign Up') {
      dispatch(startRegisterWithEmailPasswordName(name, email, password));
    }

    return navigation.navigate(navScreen);
  };

  return (
    <TouchableOpacity
      disabled={title === 'Login' ? false : disabled} //true
      style={
        title === 'Login' || !disabled
          ? stylesSignUp.btnGoogle
          : stylesSignUp.btnGoogleDisable
      }
      title={title}
      onPress={handleSigninOrLogin}>
      {navScreen === 'MyFlights' ? (
        <Text style={stylesSignUp.btnTxt}>{btnTitle}</Text>
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
