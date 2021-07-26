import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import useravatar from './images.png'

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
      className="container-fluid my-2 rounded border shadow"
      style={{
        backgroundColor: '#F5F8FB',
        width: '100%',
        minWidth: '339px',
      }}
    >
      <Navbar
        className="navbar w-100"
        variant="light"
        expand="lg"
        collapseOnSelect
      >
        <div className="container-fluid w-100">
          <LinkContainer to="/">
            <Navbar.Brand className="mx-4 my-2 fw-bold">
              <h4 style={{ color: '#262B40',fontFamily: 'Lucida Handwriting,Cursive' , fontWeight:'bolder' ,fontSize:'2rem'}}>KyamatZaman</h4>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <img style={{height:'50px' ,width:'50px' , objectFit:'contain'}} src='https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png' alt=''  ></img>
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
