import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function useExpenseFilters() {
  const expenseData = useSelector((state) => state.expenseData);
  const { expenseList, filters } = expenseData;
  const [filteredExpenseList, setFilteredExpenseList] = useState([]);

  useEffect(() => {
    let filteredList = expenseList.filter((obj) => {
      if (
        (!filters.sdate ||
          (filters.sdate &&
            new Date(filters.sdate).getTime() <=
              new Date(obj.date?.S).getTime())) &&
        (!filters.edate ||
          (filters.edate &&
            new Date(filters.edate).getTime() >=
              new Date(obj.date?.S).getTime()))
      ) {
        return obj;
      } else {
        return false;
      }
    });
    setFilteredExpenseList(filteredList);
  }, [filters, expenseList]);

  return filteredExpenseList;
}

export default useExpenseFilters;
