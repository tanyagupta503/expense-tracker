import React from 'react';
import { Form, Button } from 'react-bootstrap';

const ConfirmationForm = ({ confirmRegistrationHandler }) => {
  return (
    <Form id='confirmation-form' onSubmit={confirmRegistrationHandler}>
      <Form.Group className='mb-3' controlId='confirmationcode'>
        <Form.Label>Confirmation Code</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter Confirmation Code'
          name='confirmationcode'
          required
        />
      </Form.Group>
      <Button variant='primary' type='submit'>
        Verify
      </Button>
    </Form>
  );
};

export default ConfirmationForm;
