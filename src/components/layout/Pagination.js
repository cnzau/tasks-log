import React, { useContext, useState, useEffect } from 'react';
import {
  Dropdown,
  DropdownButton,
  Button,
  Row,
  Col,
  Badge,
  InputGroup,
  FormControl
} from 'react-bootstrap';
import AuthContext from './../../context/auth/authContext';

const Pagination = () => {
  const authContext = useContext(AuthContext);
  const {
    totalTasks,
    page: p,
    perPage,
    updatePageLimit,
    updatePage
  } = authContext;

  useEffect(() => {
    authContext.loadTasks([]);

    // eslint-disable-next-line
  }, []);

  const [pg, setPg] = useState({
    page: p
  });

  const { page } = pg;

  const handleClick = e => {
    e.preventDefault();
    // console.log(`Clicked ${e.target.value}`);
    updatePageLimit(e.target.value);
  };

  const handleChange = e => {
    // console.log(`Changed to ${e.target.value}`);
    setPg({ ...pg, [e.target.name]: e.target.value });
  };

  const handleBlur = e => {
    // console.log('Blur');
    updatePage(e.target.value);
  };

  const handlePageButtons = e => {
    e.preventDefault();
    // console.log(`Page Buttons: ${e.target.value} `);

    setPg({ ...pg, [e.target.name]: e.target.value });
    updatePage(e.target.value);
  };

  return (
    <Row>
      <Col>
        Total Tasks <Badge variant='info'>{totalTasks}</Badge>
      </Col>
      <Col>
        <InputGroup size='sm' className='mb-3'>
          <InputGroup.Prepend>
            <InputGroup.Text id='inputGroup-sizing-sm'>Page</InputGroup.Text>
            <Button
              variant='outline-secondary'
              name='page'
              value={1}
              onClick={handlePageButtons}
            >
              &#8810;
            </Button>
            <Button
              variant='outline-secondary'
              name='page'
              value={page - 1}
              onClick={handlePageButtons}
            >
              &#8918;
            </Button>
          </InputGroup.Prepend>
          <FormControl
            name='page'
            value={page}
            type='text'
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyPress={handleBlur}
            aria-label='Small'
            aria-describedby='inputGroup-sizing-sm'
          />
          <InputGroup.Append>
            <Button
              variant='outline-secondary'
              name='page'
              value={parseInt(page) + 1}
              onClick={handlePageButtons}
            >
              &#8919;
            </Button>
            <Button
              variant='outline-secondary'
              name='page'
              value={totalTasks - 1}
              onClick={handlePageButtons}
            >
              &#8811;
            </Button>
          </InputGroup.Append>
        </InputGroup>
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
