import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {stylesSignUp} from '../styles/stylesSignUp';
import CheckBox from '@react-native-community/checkbox';

const SignUp = () => {
  const navigation = useNavigation();

  const [disabled, setDisable] = useState(true);

  const [threeAnswer, setThreeAnswer] = useState(false);

  const [toggleCheckBox, setToggleCheckBox] = useState({
    checkboxOne: false,
    checkboxTwo: false,
  });
  const {checkboxOne, checkboxTwo} = toggleCheckBox;

  const [isFocus, setIsFocus] = useState({
    name: false,
    email: false,
    password: false,
  });

  const [answer, setAnswer] = useState({
    name: '',
    email: '',
    password: '',
  });
  const {name, email, password} = answer;

  const handleInputText = (inputName, textValue) => {
    setAnswer({
      ...answer,
      [inputName]: textValue,
    });
    if (
      name.trim().length > 1 &&
      email.trim().length > 1 &&
      password.trim().length > 1
    ) {
      setThreeAnswer(true);
    } else {
      setThreeAnswer(false);
    }
  };

  const handleCheckBox = (keyObjet, checkBox) => {
    setToggleCheckBox({
      ...toggleCheckBox,
      [keyObjet]: checkBox,
    });
    if (checkBox && threeAnswer && keyObjet) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  return (
    <View style={stylesSignUp.container}>
      <Text style={stylesSignUp.title}>Sign Up</Text>
      <View style={stylesSignUp.form}>
        <View>
          <Text style={stylesSignUp.subTitle}>First Name</Text>
          <TextInput
            value={name}
            onChangeText={text => handleInputText('name', text)}
            onFocus={() =>
              setIsFocus({
                ...isFocus,
                name: true,
              })
            }
            onBlur={() =>
              setIsFocus({
                ...isFocus,
                name: false,
              })
            }
            style={[
              stylesSignUp.inputText,
              isFocus.name
                ? {borderColor: '#5C6DF8'}
                : {borderColor: '#5E656F'},
            ]}
          />
        </View>
        <View>
          <Text style={stylesSignUp.subTitle}>
            Email *{' '}
            {true && (
              <Text style={stylesSignUp.errorText}>
                {' '}
                Email in use. Use a diferent Email
              </Text>
            )}
          </Text>
          <TextInput
            value={email}
            onChangeText={text => handleInputText('email', text)}
            onFocus={() =>
              setIsFocus({
                ...isFocus,
                email: true,
              })
            }
            onBlur={() =>
              setIsFocus({
                ...isFocus,
                email: false,
              })
            }
            style={[
              stylesSignUp.inputText,
              isFocus.email
                ? {borderColor: '#5C6DF8'}
                : {borderColor: '#5E656F'},
            ]}
          />
        </View>
        <View>
          <Text style={stylesSignUp.subTitle}>
            Password *
            {true && (
              <Text style={stylesSignUp.errorText}>
                {' '}
                Incorrect Email or Password
              </Text>
            )}
          </Text>
          <View
            style={[
              stylesSignUp.inputPassword,
              isFocus.password
                ? {borderColor: '#5C6DF8'}
                : {borderColor: '#5E656F'},
            ]}>
            <TextInput
              value={password}
              onChangeText={text => handleInputText('password', text)}
              onFocus={() =>
                setIsFocus({
                  ...isFocus,
                  password: true,
                })
              }
              onBlur={() =>
                setIsFocus({
                  ...isFocus,
                  password: false,
                })
              }
              secureTextEntry={true}
              style={stylesSignUp.passwordWidth}
            />
            {isFocus.password ? (
              <Image
                style={stylesSignUp.eye}
                source={require('../../assets/icons/visible-on.png')}
              />
            ) : (
              <Image
                style={stylesSignUp.eye}
                source={require('../../assets/icons/visible.png')}
              />
            )}
          </View>
        </View>
        <Text style={stylesSignUp.txtReqPass}>
          Use 8 or more characters with a mix of letters, numbers, and symbols.
        </Text>
      </View>

      <View style={stylesSignUp.checkboxes}>
        <View style={stylesSignUp.checkbox}>
          <CheckBox
            tintColors={{true: '#5C6DF8', false: 'gray'}}
            value={checkboxOne}
            onChange={() => handleCheckBox('checkboxOne', !checkboxOne)}
          />
          <Text style={stylesSignUp.txtChBx}>
            I agree to the <Text style={stylesSignUp.underLine}>Terms</Text> and
            <Text style={stylesSignUp.underLine}>Privacy </Text>Policy.
            {true && <Text style={stylesSignUp.errorText}>*</Text>}
          </Text>
        </View>
        <View style={stylesSignUp.checkbox}>
          <CheckBox
            tintColors={{true: '#5C6DF8', false: 'gray'}}
            value={checkboxTwo}
            onChange={() => handleCheckBox('checkboxTwo', !checkboxTwo)}
          />
          <Text style={stylesSignUp.txtChBx}>
            Subscribe for select product updates.
          </Text>
        </View>
      </View>
      <TouchableOpacity
        disabled={disabled}
        style={disabled ? stylesSignUp.btnDisable : stylesSignUp.btn}
        onPress={() => navigation.navigate('MyFlights')}>
        <Text style={stylesSignUp.btnTxt}>Sign Up</Text>
      </TouchableOpacity>

      <View style={stylesSignUp.or}>
        <Text>or</Text>
      </View>

      <TouchableOpacity
        disabled={disabled}
        style={
          disabled ? stylesSignUp.btnGoogleDisable : stylesSignUp.btnGoogle
        }
        title="Login"
        onPress={() => navigation.navigate('LogIn')}>
        <Image
          style={stylesSignUp.iconGoogle}
          source={require('../../assets/icons/google-logo.png')}
        />
        <Text style={stylesSignUp.btnTxt}>Sign Up with Google</Text>
      </TouchableOpacity>

      <View style={stylesSignUp.txtLinkContainer}>
        <Text style={stylesSignUp.txtLink}>Already have an account? </Text>
        <Text
          style={stylesSignUp.link}
          onPress={() => navigation.navigate('LogIn')}>
          Log In
        </Text>
      </View>
    </View>
  );
};

export default SignUp;
