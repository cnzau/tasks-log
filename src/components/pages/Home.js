import React, { useContext, useEffect, Fragment } from 'react';
import AuthContext from '../../context/auth/authContext';
import { Table, Spinner } from 'react-bootstrap';
import Pagination from '../layout/Pagination';

const Home = props => {
  const authContext = useContext(AuthContext);

  const { tasks, page, loading } = authContext;

  useEffect(() => {
    authContext.loadTasks([]);

    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
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
          {tasks.map((task, index) => {
            const {
              task_id,
              customer_first_name,
              customer_last_name,
              personnel_first_name,
              personnel_other_name,
              status,
              assigned,
              completed
            } = task;
            return (
              <tr key={task_id}>
                <td>{task_id}</td>
                <td>
                  {customer_first_name} {customer_last_name}
                </td>
                <td>
                  {personnel_first_name} {personnel_other_name}
                </td>
                <td>{status}</td>
                <td>{assigned}</td>
                <td>{completed}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div className='container text-center'>
        {loading && <Spinner animation='grow' variant='secondary' />}
      </div>
      <Pagination />
    </Fragment>
  );
};

export default Home;
