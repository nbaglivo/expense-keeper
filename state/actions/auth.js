import { AsyncStorage, Alert } from 'react-native';
import Exponent from 'exponent';
import googleConfig from '../../constants/Google';
import * as actionTypes from '../actionTypes';
import { expensesActions } from './index';

export const isLoggedIn = () => (dispatch) => {
  dispatch({
    type: actionTypes.CHECK_LOGIN_REQUEST,
    isLoading: true
  });

  AsyncStorage.getItem('session')
  .then((response) => {
    const session = JSON.parse(response);

    if (session) {
      dispatch({
        type: actionTypes.CHECK_LOGIN_SUCCESS,
        loggedIn: true,
        isLoading: false,
        user: session.user
      });
    } else {
      dispatch({
        type: actionTypes.CHECK_LOGIN_FAILURE,
        loggedIn: false,
        isLoading: false
      });
    }
  });
};

export const loginGoogle = () => (dispatch) => {
  const options = {
    webClientId: googleConfig.clientID,
    scopes: ['profile', 'email'],
    behavior: 'web'
  };

  Exponent.Google.logInAsync(options)
  .then((response) => {
    const { type, accessToken, user } = response;

    if (type === 'success') {
      dispatch({
        type: actionTypes.LOGIN_GOOGLE_REQUEST,
        isLoading: true
      });

      const userProfile = {
        name: user.name,
        email: user.email,
        profilePicture: user.photoUrl
      };

      const session = {
        googleToken: accessToken,
        user: userProfile
      };

      // Save session
      AsyncStorage.setItem('session', JSON.stringify(session))
      .then(() => {
        dispatch({
          type: actionTypes.LOGIN_GOOGLE_SUCCESS,
          loggedIn: true,
          isLoading: false,
          user: userProfile,
          googleToken: accessToken
        });

        // Fetch expenses for the user
        expensesActions.fetch();

      }, (err) => {
        dispatch({
          type: actionTypes.LOGIN_GOOGLE_FAILURE,
          error: err,
          loggedIn: false,
          isLoading: false
        });

        Alert.alert(
          'Error!',
          err,
          [{ text: 'OK', onPress: () => {} }],
        );
      });
    }
  });
};

export const logout = () => (dispatch) => {
  const doLogout = () => {
    dispatch({
      type: actionTypes.LOGOUT_REQUEST,
      isLoading: true
    });

    AsyncStorage.removeItem('session')
    .then(() => {
      dispatch({
        type: actionTypes.LOGOUT_SUCCESS
      });
    }, (err) => {
      dispatch({
        type: actionTypes.LOGOUT_FAILURE,
        error: err,
        isLoading: false
      });
    });
  };

  Alert.alert(
    'Log out?',
    null,
    [
      { text: 'Cancel', onPress: () => {} },
      { text: 'Log out', onPress: doLogout }
    ]
  );
};
