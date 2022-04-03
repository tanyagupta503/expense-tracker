import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Card } from 'react-bootstrap';
import { loadExpenses } from '../actions/expenseActions';
import api from '../services/api';
import ExpenseList from './ExpenseList';

const Home = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(null);
  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const { data } = await api.get('/');
      dispatch(loadExpenses(data.Items));
      setLoading(false);
    }
    fetchData();
  }, [dispatch]);
  return (
    <Card>
      <Card.Header>Expenses</Card.Header>
      <Card.Body>
        {loading === false ? <ExpenseList></ExpenseList> : <>Loading...</>}
      </Card.Body>
    </Card>
  );
};

export default Home;
