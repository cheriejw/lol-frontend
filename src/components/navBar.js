import React from 'react';
import {Link} from 'react-router';
import {Nav, Navbar, NavItem} from 'react-bootstrap';

export const NavBar = (
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
);
