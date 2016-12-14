import moment from 'moment';
import { map } from 'lodash';
import { AsyncStorage, Alert } from 'react-native';

import * as actionTypes from '../actionTypes';
import firebaseApp from '../../constants/Firebase';

const firebaseRef = firebaseApp.database().ref();

export const concha = () => {
    Alert.alert(
      'concha!',
      null,
      [{ text: 'OK', onPress: () => {} }],
    ); 
}

export const publish = ({amount, tag}) => (dispatch, getState) => {
  const user = getState().auth.user;
  const date = moment().format();

  const expense = {
    amount, tag,
    id : `EXPENSE:${date}`,
    username: user.name,
    creationDate: date,
  }

  firebaseRef.child('expenses').push(expense);
};

export const fetch = () => (dispatch) => {
  dispatch({
    type: actionTypes.FETCH_EXPENSES_REQUEST,
    isFetching: false
  });

  firebaseRef.child('expenses')
    .once('value', (snapshot) => {
      const expenses = map(snapshot.val(), (val, uid) => {
          const expense = val;
          expense.uid = uid;
          return expense;
      });

      dispatch({
        type: actionTypes.FETCH_EXPENSES_SUCCESS,
        expenses,
        isFetching: false
      });
  }, (err) => {
    Alert.alert(
      'Error!',
      err,
      [{ text: 'OK', onPress: () => {} }],
    );
    dispatch({
      type: actionTypes.FETCH_EXPENSES_FAILURE,
      isFetching: false,
      error: err
    });
  });
};
