import './App.css';
import UserLogin from './components/UserLogin';
import UserRegistration from './components/UserRegistration';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import Home from './components/Home';
import ExpensePieChart from './components/ExpensePieChart';
import ExpenseBarChart from './components/ExpenseBarChart';
import NewExpense from './components/NewExpense';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header></Header>
      <main>
        <Container>
          <Routes>
            <Route path='/' element={<PrivateRoute component={Home} />} />
            <Route
              path='/pie-chart'
              element={<PrivateRoute component={ExpensePieChart} />}
            />
            <Route
              path='/bar-chart'
              element={<PrivateRoute component={ExpenseBarChart} />}
            />
            <Route
              path='/add-expense'
              element={<PrivateRoute component={NewExpense} />}
            />
            <Route path='/login' element={<UserLogin />} />
            <Route path='/register' element={<UserRegistration />} />
          </Routes>
        </Container>
      </main>
    </Router>
  );
}

export default App;
