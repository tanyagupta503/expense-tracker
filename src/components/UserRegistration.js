import React, { useState, useEffect } from 'react';
import userPool from '../services/cognito';
import { Alert, Card } from 'react-bootstrap';
import { CognitoUserAttribute, CognitoUser } from 'amazon-cognito-identity-js';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ConfirmationForm from './ConfirmationForm';
import RegistrationForm from './RegistrationForm';

const UserRegistration = () => {
  const [cognitoUser, setCognitoUser] = useState(null);
  const [registrationError, setRegistrationError] = useState(null);
  let navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const goToLogin = (e) => {
    e.preventDefault();
    navigate('/login');
  };
  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [navigate, userInfo]);

  const registerHandler = (e) => {
    e.preventDefault();
    setRegistrationError('');
    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries());

    var attributeList = [];

    var dataEmail = {
      Name: 'email',
      Value: formDataObj.email,
    };
    var attributeEmail = new CognitoUserAttribute(dataEmail);

    attributeList.push(attributeEmail);

    userPool.signUp(
      formDataObj.username,
      formDataObj.password,
      attributeList,
      null,
      function (err, result) {
        if (err) {
          setRegistrationError(err.message || JSON.stringify(err));
          return;
        }
        var userData = {
          Username: formDataObj.username,
          Pool: userPool,
        };
        setCognitoUser(new CognitoUser(userData));
      }
    );
  };

  const confirmRegistrationHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries());
    cognitoUser.confirmRegistration(
      formDataObj.confirmationcode,
      true,
      function (err, result) {
        if (err) {
          setRegistrationError(err.message || JSON.stringify(err));
          return;
        }
        alert('Registration Successful. Please Login to Continue.');
        navigate('/');
        //Success Message
      }
    );
  };
  return (
    <>
      {registrationError && (
        <Alert variant='danger'>
          <Alert.Heading>Registration Failed!</Alert.Heading>
          <p>{registrationError}</p>
        </Alert>
      )}
      <Card>
        <Card.Header>Register New User</Card.Header>
        <Card.Body>
          {!cognitoUser ? (
            <RegistrationForm
              registerHandler={registerHandler}
              goToLogin={goToLogin}
            ></RegistrationForm>
          ) : (
            <ConfirmationForm
              confirmRegistrationHandler={confirmRegistrationHandler}
            ></ConfirmationForm>
          )}
        </Card.Body>
      </Card>
    </>
  );
};

export default UserRegistration;
