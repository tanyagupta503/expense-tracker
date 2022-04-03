import {
  LOAD_EXPENSES,
  ADD_EXPENSE,
  DELETE_EXPENSE,
  SET_FILTERS,
} from '../constants/expenseConstants';

const initialState = {
  expenseList: [],
  filters: {
    sdate: null,
    edate: null,
  },
};

export const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_EXPENSES:
      return {
        ...state,
        expenseList: [...action.expenseList],
      };
    case ADD_EXPENSE:
      const expense =
        action.expense.id &&
        state.expenseList.find((x) => x.id === action.expense.id);

      if (expense) {
        return {
          ...state,
          expenseList: state.expenseList.map((x) =>
            x.id === expense.id ? expense : x
          ),
        };
      } else {
        return {
          ...state,
          expenseList: [...state.expenseList, expense],
        };
      }
    case DELETE_EXPENSE:
      return {
        ...state,
        expenseList: state.expenseList.filter(
          (x) => x.expenseId?.N !== action.id
        ),
      };
    case SET_FILTERS:
      return {
        ...state,
        filters: action.filters,
      };
    default:
      return state;
  }
};
