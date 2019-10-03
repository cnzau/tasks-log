import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/auth/Login';
import NotFound from './components/pages/NotFound';
import Navbar from './components/layout/Navbar';

import { Container } from 'react-bootstrap';
import './App.css';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Container>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route component={NotFound} />
          </Switch>
        </Container>
      </Fragment>
    </Router>
  );
};

export default App;
