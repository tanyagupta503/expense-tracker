import { SET_USER_INFO } from '../constants/userInfoConstants';
export const setUserInfo = (userInfo) => ({
  type: SET_USER_INFO,
  userInfo,
});
