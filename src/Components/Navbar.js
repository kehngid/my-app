import React from 'react';
import {  Nav, NavItem, NavLink } from 'reactstrap';
import'../Stylesheets/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Nav pills>
          <NavItem>
            <NavLink href="/home">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/projects">Projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/about">About</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}