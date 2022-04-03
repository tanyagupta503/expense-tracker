import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector } from 'react-redux';

const Header = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  return (
    <header className='mb-3'>
      {userInfo ? (
        <Navbar expand='lg'>
          <Container>
            <LinkContainer to='/'>
              <Navbar.Brand>Expense Tracker</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='me-auto'>
                <LinkContainer to='/add-expense'>
                  <Nav.Link>New Expense</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/pie-chart'>
                  <Nav.Link>Pie Chart</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/bar-chart'>
                  <Nav.Link>Bar Chart</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ) : (
        <></>
      )}
    </header>
  );
};

export default Header;
