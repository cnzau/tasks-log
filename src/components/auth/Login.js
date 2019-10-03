import React from 'react';
import { Form, Row, Col, Button, Card } from 'react-bootstrap';

const Login = props => {
  const onSubmit = e => {
    e.preventDefault();
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
                <Form.Control type='text' name='phone' required />
              </Form.Group>

              <Form.Group as={Row} controlId='formHorizontalPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' name='password' required />
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
