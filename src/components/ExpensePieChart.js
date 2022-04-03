import React, { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';
import { Card } from 'react-bootstrap';
import DateFilter from './DateFilter';
import useExpenseFilters from '../hooks/useExpenseFilters';

const ExpensePieChart = () => {
  const expenseList = useExpenseFilters();
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    let data = expenseList.reduce(
      (acc, obj) => {
        let categoryIdx = acc.findIndex((el) => el[0] === obj.expenseType?.S);
        if (categoryIdx >= 0) {
          acc[categoryIdx] = [
            obj.expenseType?.S,
            acc[categoryIdx][1] + +obj.expense?.N,
          ];
        } else {
          acc.push([obj.expenseType?.S, parseInt(obj.expense?.N)]);
        }
        return acc;
      },
      [['Category', 'Expense']]
    );
    setChartData(data);
  }, [expenseList]);
  return (
    <Card>
      <Card.Header>Expenses Pie Chart</Card.Header>
      <Card.Body>
        <DateFilter></DateFilter>
        {chartData.length > 1 ? (
          <Chart
            chartType='PieChart'
            data={chartData}
            options={{}}
            width={'100%'}
            height={'400px'}
          />
        ) : (
          <>No Data Found</>
        )}
      </Card.Body>
    </Card>
  );
};

export default ExpensePieChart;
