import { createStore } from 'redux';
import { expenseReducer } from './reducers/expenseReducer';
import { userInfoReducer } from './reducers/userInfoReducer';
import { combineReducers } from 'redux';

const reducer = combineReducers({
  expenseData: expenseReducer,
  userLogin: userInfoReducer,
});

const store = createStore(reducer);

export default store;
