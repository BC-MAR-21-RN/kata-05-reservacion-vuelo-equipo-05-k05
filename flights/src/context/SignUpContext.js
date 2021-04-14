import React, {createContext, useState} from 'react';

export const SignUpContext = createContext();
export const SignUpProvider = ({children}) => {
  const [disabled, setDisable] = useState(true);
  const [toggleCheckBox, setToggleCheckBox] = useState({
    checkboxOne: false,
    checkboxTwo: false,
  });
  const {checkboxOne} = toggleCheckBox;
  const [threeAnswer, setThreeAnswer] = useState(false);
  const [answer, setAnswer] = useState({
    name: '',
    email: '',
    password: '',
  });
  const {name, email, password} = answer;
  const [isFocus, setIsFocus] = useState({
    focusName: false,
    focusEmail: false,
    focusPassword: false,
  });
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
      if (checkboxOne) {
        setDisable(false);
      } else {
        setDisable(true);
      }
    } else {
      setThreeAnswer(false);
      setDisable(true);
    }
  };

  const handleCheckBox = (keyObjet, checkBox) => {
    setToggleCheckBox({
      ...toggleCheckBox,
      [keyObjet]: checkBox,
    });

    if (keyObjet === 'checkboxOne' && checkBox && threeAnswer) {
      setDisable(false);
    } else if (keyObjet === 'checkboxTwo' && threeAnswer && checkboxOne) {
      setDisable(false);
    } else {
      setDisable(true);
    }

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
  return (
    <SignUpContext.Provider
      value={{
        isFocus,
        answer,
        disabled,
        toggleCheckBox,
        setIsFocus,
        handleInputText,
        handleCheckBox,
        setDisable,
        setToggleCheckBox,
      }}>
      {children}
    </SignUpContext.Provider>
  );
};
