import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';

import {NavLink} from 'react-router-dom'
import logo from "../images/loflix-logo.png";


const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar dark expand="md">
        <NavbarBrand href="/">
          <img src={logo} height="100" width="100" alt="loflix-logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink className="nav-link" to='/home'>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to='/movies'>Movies</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to='/tvshows'>TV Shows</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;