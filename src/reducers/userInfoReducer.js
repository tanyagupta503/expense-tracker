import { SET_USER_INFO } from '../constants/userInfoConstants';

export const userInfoReducer = (state = {}, action) => {
  if (action.type === SET_USER_INFO) {
    return {
      ...state,
      userInfo: action.userInfo,
    };
  }
  return state;
};
