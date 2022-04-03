import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from '../actions/expenseActions';

const DateFilter = () => {
  const dispatch = useDispatch();
  const expenseData = useSelector((state) => state.expenseData);
  const { filters } = expenseData;
  const setDateFilters = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries());
    console.log(formDataObj);
    dispatch(setFilters(formDataObj));
  };
  return (
    <Form onSubmit={setDateFilters}>
      <Row className='align-items-center'>
        <Col xs='auto'>
          <Form.Label htmlFor='sdate' visuallyHidden>
            From
          </Form.Label>
          <Form.Control
            className='mb-2'
            id='sdate'
            name='sdate'
            placeholder='From'
            type='date'
            defaultValue={filters.sdate}
          />
        </Col>
        <Col xs='auto'>
          <Form.Label htmlFor='edate' visuallyHidden>
            To
          </Form.Label>
          <Form.Control
            className='mb-2'
            id='edate'
            name='edate'
            placeholder='To'
            type='date'
            defaultValue={filters.edate}
          />
        </Col>

        <Col xs='auto'>
          <Button type='submit' className='mb-2'>
            Filter
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default DateFilter;
