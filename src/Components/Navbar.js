import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import'../Stylesheets/Navbar.css';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Nav>
          <NavItem>
            <NavLink href="../Pages/Home.js">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="../Pages/Projects.js">Projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="../Pages/About.js">About</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}
