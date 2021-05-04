import {loadFlights} from '../helpers/loadFlights';
import {types} from '../types/types';

export const startLoadingFlights = uid => {
  return async dispatch => {
    const getFLights = await loadFlights(uid);
    dispatch(setFlights(getFLights));
  };
};

export const setFlights = flights => {
  return {
    type: types.setFlights,
    payload: flights,
  };
};
