import {types} from '../types/types';

const initialState = {
  uid: '',
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        uid: action.payload,
      };
    case types.logout:
      return {};
    default:
      return state;
  }
};
