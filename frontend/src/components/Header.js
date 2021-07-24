import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = ({ history }) => {
  const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null;

  const logoutHandler = () => {
    localStorage.removeItem('userInfo');
    history.push('/');
  };

  return (
    <header
      className="container-fluid my-2 rounded"
      style={{
        backgroundColor: '#342a35',
        width: '100%',
        minWidth: '339px',
        border: '3px solid rgb(221, 178, 37)',
      }}
    >
      <Navbar
        className="navbar w-100"
        variant="dark"
        expand="lg"
        collapseOnSelect
      >
        <div className="container-fluid w-100">
          <LinkContainer to="/">
            <Navbar.Brand className="mx-4 my-2 fw-bold">
              <h4 style={{ color: 'gold' }}>KhayamatAzan</h4>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {userInfoFromStorage ? (
                <NavDropdown title={userInfoFromStorage.name} id="username">
                  <LinkContainer to="/login">
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
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
