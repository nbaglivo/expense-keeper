import { expenses as expensesInitialState } from '../initialState';
import { FETCH_EXPENSES_SUCCESS, FETCH_EXPENSES_FAILURE, FETCH_EXPENSES_REQUEST } from '../actionTypes';

const expensesReducer = (state = expensesInitialState, action) => {
  switch (action.type) {
    case FETCH_EXPENSES_REQUEST:
      return {
        ...state,
        isFetching: action.isFetching
      };
    case FETCH_EXPENSES_SUCCESS:
      return {
        ...state,
        all: action.expenses,
        isFetching: action.isFetching
      };
    case FETCH_EXPENSES_FAILURE:
      return {
        ...state,
        error: action.error,
        isFetching: action.isFetching
      };
    default:
      return state;
  }
};

export default expensesReducer;