import axios from 'axios';

import store from '../store';
store.subscribe(listener);

function select(state) {
  return state.userLogin.userInfo?.accessToken;
}

let accessToken = null;

function listener() {
  let token = select(store.getState());
  if (token && !accessToken) {
    accessToken = token;
    api.defaults.headers.common['Authorization'] = token;
  }
}

const api = axios.create({
  baseURL:
    'https://eikyz5cux7.execute-api.us-east-2.amazonaws.com/prod/expenses',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
