import { CognitoUserPool } from 'amazon-cognito-identity-js';
import { CLIENT_ID, USER_POOL_ID } from '../constants/cognitoConstants';

const userPool = new CognitoUserPool({
  UserPoolId: USER_POOL_ID,
  ClientId: CLIENT_ID,
});

export default userPool;
