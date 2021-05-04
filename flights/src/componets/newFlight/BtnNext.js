import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {startLoadingFlights} from '../../actions/flightsAction';
import {
  firstAnswer,
  numPassengers,
  secondAnswer,
  saveFlightDb,
} from '../../actions/newFlightAction';
import {stylesNewFlightGlobal} from '../../styles/newFlightsScreens/stylesNewFlightGlobal';

const BtnNext = ({nav, title, text, info}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {uid} = useSelector(state => state.auth);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (text.length > 2 || info > 0 || title === 'Finish') {
      setDisabled(false);
    }
  }, [text, info, title]);

  const handlePresBtn = () => {
    switch (nav) {
      case 'ToWhereYouGo':
        dispatch(firstAnswer(text));
        break;
      case 'Calendar':
        dispatch(secondAnswer(text));
        break;
      case 'CreateNewFlyght':
        dispatch(numPassengers(info));
        break;
      default:
        break;
    }
    if (title === 'Finish') {
      dispatch(saveFlightDb());
      dispatch(startLoadingFlights(uid));
    }
    return navigation.navigate(nav);
  };

  return (
    <TouchableOpacity
      style={
        disabled
          ? [stylesNewFlightGlobal.btnNext, {backgroundColor: '#b8b4bc'}]
          : [stylesNewFlightGlobal.btnNext]
      }
      onPress={handlePresBtn}
      disabled={disabled}>
      <Text style={stylesNewFlightGlobal.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default BtnNext;
