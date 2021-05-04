import {types} from '../types/types';
import auth from '@react-native-firebase/auth';
import {errorEmail, errorPasswordOrEmail} from './Ui';

export const startRegisterWithEmailPasswordName = (name, email, password) => {
  return dispatch => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        const {uid} = userCredential.user._user;

        dispatch(login(uid));
        dispatch(errorEmail(false));
        dispatch(errorPasswordOrEmail(false));
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          dispatch(errorEmail(true));
        }
        if (error.code === 'auth/invalid-email') {
          dispatch(errorPasswordOrEmail(true));
        }
      });
  };
};

export const LogInWithEmailAndPassWord = (email, password) => {
  return dispatch => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        // Signed in
        const {uid} = userCredential.user._user;

        dispatch(login(uid));
        dispatch(errorEmail(false));
        dispatch(errorPasswordOrEmail(false));
        // ...
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          dispatch(errorEmail(true));
        }
        if (error.code === 'auth/user-not-found') {
          dispatch(errorEmail(true));
        }
        if (error.code === 'auth/invalid-email') {
          dispatch(errorPasswordOrEmail(true));
        }
      });
  };
};

export const logOutBtn = () => {
  return dispatch => {
    auth()
      .signOut()
      .then(() => {});
  };
};

export const login = uid => {
  return {
    type: types.login,
    payload: uid,
  };
};
