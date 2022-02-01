import React from 'react';
import {  Nav, NavItem, NavLink } from 'reactstrap';
import'../Stylesheets/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Example extends React.Component {
  render() {
    return (
      <div className="navbar">
        <Nav pills>
          <NavItem className="navtab">
            <NavLink href="/" >Home</NavLink>
          </NavItem>
          <NavItem className="navtab">
            <NavLink href="/projects">Projects</NavLink>
          </NavItem>
          <NavItem className="navtab">
            <NavLink href="/about">About</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}