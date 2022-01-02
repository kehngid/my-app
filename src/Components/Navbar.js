import React from 'react';
import { Button } from 'reactstrap';
import'../Stylesheets/Navbar.css';

export default class Navbar extends React.Component {
  render() {
    return (
      <div>
        <Button className="button">Home</Button>{' '}
        <Button className="button">Projects</Button>{' '}
        <Button className="button">About</Button>
      </div>
    );
  }
}

