import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/auth/Login';
import NotFound from './components/pages/NotFound';
import Navbar from './components/layout/Navbar';
import { Container } from 'react-bootstrap';
import AuthState from './context/auth/AuthState';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './components/routing/PrivateRoute';
import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <Router>
        <Fragment>
          <Navbar />
          <Container>
            <Switch>
              <PrivateRoute exact path='/' component={Home} />
              <Route exact path='/login' component={Login} />
              <Route component={NotFound} />
            </Switch>
          </Container>
        </Fragment>
      </Router>
    </AuthState>
  );
};

export default App;
