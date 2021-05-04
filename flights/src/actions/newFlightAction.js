import {types} from '../types/types';
import firestore from '@react-native-firebase/firestore';

export const firstAnswer = answer => {
  return {
    type: types.fisrtInputCity,
    payload: answer,
  };
};
export const getCodeFirstCity = cityCode => {
  return {
    type: types.getCodeFirstCity,
    payload: cityCode,
  };
};
export const secondAnswer = answer => {
  return {
    type: types.secondInputCity,
    payload: answer,
  };
};
export const getCodeSecondCity = cityCode => {
  return {
    type: types.getCodeSecondCity,
    payload: cityCode,
  };
};
export const departureDate = day => {
  return {
    type: types.date,
    payload: day,
  };
};
export const numPassengers = num => {
  return {
    type: types.numPassengers,
    payload: num,
  };
};

export const saveFlightDb = () => {
  return async (dispatch, getState) => {
    const {uid} = getState().auth;
    const {
      countryDeparture,
      cityDepartureAbr,
      countryArrival,
      cityArrivalAbr,
      departureDate,
      passengers,
    } = getState().newFlight;

    const newFlight = {
      countryDeparture,
      cityDepartureAbr,
      countryArrival,
      cityArrivalAbr,
      departureDate,
      passengers,
    };

    try {
      const doc = await firestore()
        .collection(`${uid}/flights/flightlist`)
        .add(newFlight);
      dispatch(createNewFlight());
    } catch (error) {
      dispatch(createNewFlight());
    }
  };
};

export const createNewFlight = () => {
  return {
    type: types.flieghtCreated,
  };
};
