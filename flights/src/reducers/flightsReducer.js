import {types} from '../types/types';

const initialState = {
  flightsList: [],
};

export const flightsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.setFlights:
      return {
        ...state,
        flightsList: [...action.payload],
      };
    default:
      return state;
  }
};
