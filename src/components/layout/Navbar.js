import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar as Navba, Nav } from 'react-bootstrap';

const Navbar = () => {
  const onLogout = () => {
    console.log('Logged Out');
  };

  const allLinks = (
    <Fragment>
      <Nav.Item as='li'>
        <Nav.Link as={Link} to='/'>
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as='li'>
        <Nav.Link as={Link} to='/login'>
          Login
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as='li'>
        <Nav.Link onClick={onLogout} href='#'>
          Logout
        </Nav.Link>
      </Nav.Item>
    </Fragment>
  );

  return (
    <Fragment>
      <Navba variant='light' bg='light'>
        <Container>
          <Navba.Brand href='#'>Tasks Log</Navba.Brand>
          <Nav as='ul' className='justify-content-end' activeKey='/home'>
            {allLinks}
          </Nav>
        </Container>
      </Navba>
    </Fragment>
  );
};

export default Navbar;
