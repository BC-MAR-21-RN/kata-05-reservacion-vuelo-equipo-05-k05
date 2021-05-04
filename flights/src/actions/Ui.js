import {types} from '../types/types';

export const errorEmail = error => {
  return {
    type: types.errorEmail,
    payload: error,
  };
};

export const errorPasswordOrEmail = error => {
  return {
    type: types.errorPassword,
    payload: error,
  };
};
