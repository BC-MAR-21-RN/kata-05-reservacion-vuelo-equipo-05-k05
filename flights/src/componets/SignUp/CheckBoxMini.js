import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {SignUpContext} from '../../context/SignUpContext';
import {stylesSignUp} from '../../styles/stylesSignUp';

const MiniBoxMini = ({checkBoxNumber, valueCheck}) => {
  const {handleCheckBox} = useContext(SignUpContext);
  return (
    <View style={stylesSignUp.checkbox}>
      <CheckBox
        tintColors={{true: '#5C6DF8', false: 'gray'}}
        value={valueCheck}
        onChange={() => handleCheckBox(checkBoxNumber, !valueCheck)}
      />
      {checkBoxNumber === 'checkboxOne' ? (
        <Text style={stylesSignUp.txtChBx}>
          I agree to the <Text style={stylesSignUp.underLine}>Terms</Text> and
          <Text style={stylesSignUp.underLine}> Privacy </Text>Policy.
          {true && <Text style={stylesSignUp.errorText}>*</Text>}
        </Text>
      ) : (
        <Text style={stylesSignUp.txtChBx}>
          Subscribe for select product updates.
        </Text>
      )}
    </View>
  );
};

export default MiniBoxMini;
