import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, Card } from 'react-bootstrap';
import { addExpense } from '../actions/expenseActions';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

const NewExpense = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const expenseData = useSelector((state) => state.expenseData);
  const { expenseList } = expenseData;
  const addExpenseHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries());
    console.log(formDataObj);
    const id = expenseList.reduce(
      (acc, obj) => (acc > obj.expenseId?.N ? acc : obj.expenseId?.N),
      0
    );
    const { data } = await api.put('/', {
      ...formDataObj,
      id: +id + 1,
    });
    if (data.message) {
      alert('Error in Adding Expense - ' + data.message);
    } else {
      dispatch(addExpense(formDataObj));
      navigate('/');
    }
  };
  return (
    <Card>
      <Card.Header>New Expense</Card.Header>
      <Card.Body>
        <Form onSubmit={addExpenseHandler}>
          <Form.Group className='mb-3' controlId='date'>
            <Form.Label>Expense Date:</Form.Label>
            <Form.Control
              type='date'
              name='date'
              max={new Date().toISOString().split('T')[0]}
              required
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='type'>
            <Form.Label>Category</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Category'
              name='type'
              required
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='amount'>
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type='number'
              placeholder='Enter Amount'
              name='amount'
              required
            />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default NewExpense;
