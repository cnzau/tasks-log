import React, { useContext, useState, useEffect } from 'react';
import {
  Pagination as Pagin,
  Dropdown,
  DropdownButton,
  Button,
  Row,
  Col,
  Badge
} from 'react-bootstrap';
import AuthContext from './../../context/auth/authContext';

const Pagination = () => {
  const authContext = useContext(AuthContext);
  const { totalTasks, page, perPage, updatePageLimit } = authContext;

  useEffect(() => {
    authContext.loadTasks();

    // eslint-disable-next-line
  }, []);

  const handleClick = e => {
    e.preventDefault();
    console.log(`Clicked ${e.target.value}`);
    updatePageLimit(e.target.value);
  };
  const handleChange = e => console.log(`Clicked ${e.target.value}`);
  console.log(`Current Page  state: ${page}`);
  let active = page;
  let numbers = [];
  if (totalTasks >= 1) {
    numbers.push(1);
    numbers.push(page - 1);
    numbers.push(page);
    numbers.push(page + 1);
    numbers.push(totalTasks);
  }
  // for (let number = 1; number <= totalTasks - 1; number++) {
  //   items.push(
  //     <Pagination.Item key={number} active={number === active}>
  //       {number}
  //     </Pagination.Item>
  //   );
  // }
  return (
    <Row>
      <Col>
        Total Tasks <Badge variant='info'>{totalTasks}</Badge>
      </Col>
      <Col>
        {/* <Pagination size='sm'>{items}</Pagination> */}
        <Pagin size='sm'>
          <Pagin.Prev />
          <Pagin.First />
          <Pagin.Item active={true}>{1}</Pagin.Item>
          {/* <Pagin.Item className={page === 1 && 'active'}>{1}</Pagin.Item> */}
          {page !== 2 && <Pagin.Ellipsis />}

          <Pagin.Item>{11}</Pagin.Item>
          <Pagin.Item>{12}</Pagin.Item>
          <Pagin.Item>{13}</Pagin.Item>

          <Pagin.Ellipsis />
          <Pagin.Item>{20}</Pagin.Item>
          <Pagin.Next />
          <Pagin.Last />
        </Pagin>
        {/* Current Page {page} */}
      </Col>
      <Col>
        <DropdownButton
          id='dropdown-basic-button'
          title={`Page Size ${perPage}`}
          size='sm'
          variant='secondary'
          onChange={handleChange}
        >
          <Dropdown.Item as='option' onClick={handleClick} value='5'>
            5
          </Dropdown.Item>
          <Dropdown.Item as='option' onClick={handleClick} value='10'>
            10
          </Dropdown.Item>
        </DropdownButton>
      </Col>
    </Row>
  );
};

export default Pagination;
