import React from 'react';
import {  Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from "react-router-dom";
import'../Stylesheets/Navbar.css';
import { propTypes } from 'react-bootstrap/esm/Image';

export default class Navbar extends React.Component {

  render() {
    return (
      <div>
        <Nav>
          <NavItem>
            <NavLink href="/" active>Home</NavLink>
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