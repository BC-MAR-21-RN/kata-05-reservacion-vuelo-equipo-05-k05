import React, {useContext} from 'react';
import {View} from 'react-native';
import {SignUpContext} from '../../context/SignUpContext';
import {stylesSignUp} from '../../styles/stylesSignUp';
import CheckBoxMini from './CheckBoxMini';

const TwoCheckbox = () => {
  const {checkboxOne, checkboxTwo} = useContext(SignUpContext);
  return (
    <View style={stylesSignUp.checkboxes}>
      <CheckBoxMini checkBoxNumber={'checkboxOne'} valueCheck={checkboxOne} />
      <CheckBoxMini checkBoxNumber={'checkboxTwo'} valueCheck={checkboxTwo} />
    </View>
  );
};

export default TwoCheckbox;
