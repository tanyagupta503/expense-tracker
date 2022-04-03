import {
  ADD_EXPENSE,
  DELETE_EXPENSE,
  LOAD_EXPENSES,
  SET_FILTERS,
} from '../constants/expenseConstants';

export const loadExpenses = (expenseList) => ({
  type: LOAD_EXPENSES,
  expenseList,
});

export const addExpense = (expense) => ({
  type: ADD_EXPENSE,
  expense,
});

export const deleteExpense = (id) => ({
  type: DELETE_EXPENSE,
  id,
});

export const setFilters = (filters) => ({
  type: SET_FILTERS,
  filters,
});
