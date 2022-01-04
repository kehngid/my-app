import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { Link } from "react-router-dom";
import'../Stylesheets/Navbar.css';

export default class Navbar extends React.Component {
  render() {
    return (
      <div>
        <Nav>
          <NavItem>
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem>
            <Link to="/projects">Projects</Link>
          </NavItem>
          <NavItem>
            <Link to="/about">About</Link>
          </NavItem>
        </Nav>
      </div>
    );
  }
}
