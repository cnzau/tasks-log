import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import { Form, Row, Col, Button, Card } from 'react-bootstrap';

const Login = props => {
  const authContext = useContext(AuthContext);

  const { login, error, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    phone: '',
    password: ''
  });

  const { phone, password } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (phone === '' || password === '') {
      console.log('Please enter all fields', 'danger');
    } else {
      login({
        phone,
        password
      });
    }
  };

  return (
    <Row className='justify-content-md-center'>
      <Col md='auto' className='my-5'>
        <Card bg='light'>
          <Card.Body>
            <Card.Title>Account Login</Card.Title>
            <Form onSubmit={onSubmit}>
              <Form.Group as={Row} controlId='formHorizontalEmail'>
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type='text'
                  name='phone'
                  value={phone}
                  onChange={onChange}
                  required
                />
              </Form.Group>

              <Form.Group as={Row} controlId='formHorizontalPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  name='password'
                  value={password}
                  onChange={onChange}
                  required
                />
              </Form.Group>

              <Form.Group as={Row}>
                <Col>
                  <Button type='submit' value='Login'>
                    Login
                  </Button>
                </Col>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;
