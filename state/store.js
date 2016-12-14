import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { createNavigationEnabledStore, NavigationReducer } from '@exponent/ex-navigation';

import thunk from 'redux-thunk';
/*import devToolsEnhancer from 'remote-redux-devtools';*/
import expensesReducer from './reducers/expenses';
import authReducer from './reducers/auth';

const createStoreWithNavigation = createNavigationEnabledStore({
  createStore,
  navigationStateKey: 'navigation'
});

const rootReducer = combineReducers({
  expenses: expensesReducer,
  auth: authReducer
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk)/*, devToolsEnhancer()*/
  )
);

export default store;
