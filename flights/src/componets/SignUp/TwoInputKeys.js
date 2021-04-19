import React, { useContext } from 'react';
import { SignUpContext } from '../../context/SignUpContext';
import InputKeys from '../SignUp/InputKeys';



const TwoInputKeys = () => {

  const {answer, isFocus} = useContext(SignUpContext);
    return (
      <>
        {/* name */}
          <InputKeys
            name={answer.name}
            title={'First Name'}
            keyFocus={'focusName'}
            keyName={'name'}
            valueFocus={isFocus.focusName}
          />
        {/* email */}
          <InputKeys
            name={answer.email}
            title={'Email'}
            keyFocus={'focusEmail'}
            keyName={'email'}
            valueFocus={isFocus.focusEmail}
          />
      </>
    );
};

export default TwoInputKeys;