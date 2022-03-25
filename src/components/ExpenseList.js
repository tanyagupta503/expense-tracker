import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { capitalizeFirstLetter } from '../utils';
import Moment from 'react-moment';
import { FaTrash } from 'react-icons/fa';

const ExpenseList = () => {
  return (
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
            <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td></td>
            </tr>
            <tr>
            <td>2</td>
            <td>{capitalizeFirstLetter("travel")}</td>
            <td>
                <Moment format="DD MMM YYYY">{"2019-01-28"}</Moment>
            </td>
            <td>200</td>
            <td><Button variant="outline-danger" size="sm"><FaTrash className='me-1' /><span className="align-middle">Delete</span></Button></td>
            </tr>
        </tbody>
    </Table>
  )
}

export default ExpenseList