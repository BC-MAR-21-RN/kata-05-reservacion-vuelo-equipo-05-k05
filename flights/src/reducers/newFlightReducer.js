import {types} from '../types/types';

const initialState = {
  countryDeparture: '',
  cityDepartureAbr: '',
  countryArrival: '',
  cityArrivalAbr: '',
  departureDate: '',
  passengers: '',
};

export const newFlightReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.fisrtInputCity:
      return {
        ...state,
        countryDeparture: action.payload,
      };
    case types.getCodeFirstCity:
      return {
        ...state,
        cityDepartureAbr: action.payload,
      };
    case types.secondInputCity:
      return {
        ...state,
        countryArrival: action.payload,
      };
    case types.getCodeSecondCity:
      return {
        ...state,
        cityArrivalAbr: action.payload,
      };
    case types.date:
      return {
        ...state,
        departureDate: action.payload,
      };
    case types.numPassengers:
      return {
        ...state,
        passengers: action.payload,
      };
    case types.flieghtCreated:
      return {
        countryDeparture: '',
        cityDepartureAbr: '',
        countryArrival: '',
        cityArrivalAbr: '',
        departureDate: '',
        passengers: '',
      };
    default:
      return state;
  }
};
