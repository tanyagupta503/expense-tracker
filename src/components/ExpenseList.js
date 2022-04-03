import React from 'react';
import { useDispatch } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import { capitalizeFirstLetter } from '../utils';
import Moment from 'react-moment';
import { deleteExpense } from '../actions/expenseActions';
import api from '../services/api';
import DateFilter from './DateFilter';
import useExpenseFilters from '../hooks/useExpenseFilters';

const ExpenseList = () => {
  const dispatch = useDispatch();
  const expenseList = useExpenseFilters();
  const deleteExpenseHandler = async (id) => {
    const { data } = await api.delete('/', {
      data: { expenseId: parseInt(id) },
    });
    if (data.message) {
      alert('Error in Deleting Expense - ' + data.message);
    } else {
      dispatch(deleteExpense(id));
    }
  };
  return (
    <>
      <DateFilter></DateFilter>
      {expenseList.length ? (
        <Table hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Category</th>
              <th>Expense Date</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {expenseList.map((expense) => (
              <tr key={expense.expenseId?.N}>
                <td>{expense.expenseId?.N}</td>
                <td>{capitalizeFirstLetter(expense.expenseType?.S)}</td>
                <td>
                  {isNaN(Date.parse(expense.date?.S)) ? (
                    <>{expense.date?.S}</>
                  ) : (
                    <Moment format='DD MMM YYYY'>{expense.date?.S}</Moment>
                  )}
                </td>
                <td>Rs. {expense.expense?.N}</td>
                <td>
                  <Button
                    variant='outline-danger'
                    size='sm'
                    onClick={() => deleteExpenseHandler(expense.expenseId?.N)}
                  >
                    <span className='align-middle'>Delete</span>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <>No Expenses Found</>
      )}
    </>
  );
};

export default ExpenseList;
