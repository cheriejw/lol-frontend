import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, Link} from 'react-router';
import {Nav, Navbar, NavItem} from 'react-bootstrap';

import {Main, UserProfile} from './views';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

ReactDOM.render(
  <div>
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">PORORIFT</Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem href="/signup">Signup</NavItem>
        <NavItem href="/login">Login</NavItem>
      </Nav>
    </Navbar>
    <Router history={browserHistory}>
      <Route path="/" component={Main}/>
      <Route path="/two" component={UserProfile}/>
    </Router>
  </div>,
  document.getElementById('root')
);
