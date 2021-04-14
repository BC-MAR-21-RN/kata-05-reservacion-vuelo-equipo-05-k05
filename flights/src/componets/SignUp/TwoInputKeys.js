import React from 'react';

const TwoInputKeys = () => {
    
  return (
    <>
      <InputKeys
        name={answer.name}
        title={'First Name'}
        keyFocus={'focusName'}
        keyName={'name'}
        valueFocus={isFocus.focusName} />
      <InputKeys
        name={answer.email}
        title={'Email '}
        keyFocus={'focusEmail'}
        keyName={'email'}
        valueFocus={isFocus.focusEmail} />
    </>
  );
};

export default TwoInputKeys;
