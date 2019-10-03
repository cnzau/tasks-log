import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import { Container, Navbar as Navba, Nav } from 'react-bootstrap';

const Navbar = () => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, logout } = authContext;

  const onLogout = () => {
    logout();
  };

  const authLinks = (
    <Fragment>
      <Nav.Item as='li'>
        <Nav.Link as={Link} to='/'>
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as='li'>
        <Nav.Link onClick={onLogout} href='#'>
          Logout
        </Nav.Link>
      </Nav.Item>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <Nav.Item as='li'>
        <Nav.Link as={Link} to='/login'>
          Login
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
            {isAuthenticated ? authLinks : guestLinks}
          </Nav>
        </Container>
      </Navba>
    </Fragment>
  );
};

export default Navbar;
