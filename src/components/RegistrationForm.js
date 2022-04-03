import React from 'react';
import { Form, Button } from 'react-bootstrap';

const RegistrationForm = ({ registerHandler, goToLogin }) => {
  return (
    <Form id='registration-form' onSubmit={registerHandler}>
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
      <Form.Group className='mb-3' controlId='email'>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type='email'
          placeholder='Enter Email'
          name='email'
          required
        />
      </Form.Group>
      <Button variant='primary' type='submit'>
        Register
      </Button>
      <Button variant='link' onClick={goToLogin}>
        Login
      </Button>
    </Form>
  );
};

export default RegistrationForm;
