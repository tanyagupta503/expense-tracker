import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Chart } from 'react-google-charts';
import moment from 'moment';
import { Card } from 'react-bootstrap';
import DateFilter from './DateFilter';

const ExpenseBarChart = () => {
  const expenseData = useSelector((state) => state.expenseData);
  const { expenseList, filters } = expenseData;
  const { sdate, edate } = filters;
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    let data = [['Date', 'Expense']];
    var d = new Date(sdate);
    while (d <= new Date(edate)) {
      let expense = expenseList.reduce((acc, obj) => {
        if (new Date(obj.date?.S).getTime() === d?.getTime()) {
          acc += +obj.expense?.N;
        }
        return acc;
      }, 0);
      data.push([moment(d).format('DD MMM YYYY'), expense]);
      d.setDate(d.getDate() + 1);
    }
    setChartData(data);
  }, [expenseList, sdate, edate]);
  return (
    <Card>
      <Card.Header>Expenses Bar Chart</Card.Header>
      <Card.Body>
        <DateFilter></DateFilter>
        {chartData.length > 1 ? (
          <Chart
            chartType='BarChart'
            width='100%'
            height='400px'
            data={chartData}
            options={{}}
          />
        ) : (
          <>No Data Found</>
        )}
      </Card.Body>
    </Card>
  );
};

export default ExpenseBarChart;
