import React, { Fragment } from 'react';
import { Table } from 'react-bootstrap';

const Home = props => {
  return (
    <Fragment>
      <h1>My table data</h1>

      <Table striped bordered hover className='my-2' size='sm'>
        <thead>
          <tr>
            <th>#Id</th>
            <th>Customer</th>
            <th>Personnel</th>
            <th>Status</th>
            <th>Date Assigned</th>
            <th>Date Completed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>all data</td>
          </tr>
        </tbody>
      </Table>
    </Fragment>
  );
};

export default Home;
