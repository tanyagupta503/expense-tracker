import React, { useEffect, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';
import userPool from '../services/cognito';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUserInfo } from '../actions/userInfoActions';

const UserLogin = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginError, setLoginError] = useState(null);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const goToRegistration = (e) => {
    e.preventDefault();
    navigate('/register');
  };
  const loginHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries());
    var authenticationData = {
      Username: formDataObj.username,
      Password: formDataObj.password,
    };
    var authenticationDetails = new AuthenticationDetails(authenticationData);
    var userData = {
      Username: formDataObj.username,
      Pool: userPool,
    };
    var cognitoUser = new CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: function (result) {
        var accessToken = result.getAccessToken().getJwtToken();

        console.log('Successfully logged in!');
        dispatch(setUserInfo({ ...cognitoUser, accessToken }));
      },
      onFailure: function (err) {
        setLoginError(err.message || JSON.stringify(err));
      },
    });
  };
  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [navigate, userInfo]);
  return (
    <>
      {loginError && (
        <Alert variant='danger'>
          <Alert.Heading>Login Failed!</Alert.Heading>
          <p>{loginError}</p>
        </Alert>
      )}
      <Card>
        <Card.Header>Login</Card.Header>
        <Card.Body>
          <Form onSubmit={loginHandler}>
            <Form.Group className='mb-3' controlId='username'>
              <Form.Label>UserName</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter UserName'
                name='username'
                required
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Enter Password'
                name='password'
                required
              />
            </Form.Group>
            <Button variant='primary' type='submit'>
              Login
            </Button>
            <Button variant='link' onClick={goToRegistration}>
              Register
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default UserLogin;
