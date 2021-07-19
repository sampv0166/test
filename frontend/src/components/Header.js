import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import currentUser from '../data/CurrentUser';

const Header = () => {
  return (
    <header style={{ backgroundColor: '#513858' }}>
      <Navbar
        className="navbar border w-100"
        variant="dark"
        expand="lg"
        collapseOnSelect
      >
        <div className="container-fluid w-100">
          <LinkContainer to="/">
            <Navbar.Brand className="mx-4 my-2">KhayamatAzan</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {currentUser.id ? (
                <NavDropdown title={currentUser.name} id="username">
                  <LinkContainer to="/login">
                    <NavDropdown.Item>Logoutk</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              ) : (
                <NavDropdown title="" id="username">
                  <LinkContainer to="/login">
                    <NavDropdown.Item>Login</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
