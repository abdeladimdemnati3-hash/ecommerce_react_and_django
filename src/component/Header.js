import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand="lg" collapseOnSelect className="py-2">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>PspShop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <LinkContainer to="/products">
                <Nav.Link><i className='fas fa-box'></i> Products</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/category/electronics">
                <Nav.Link><i className='fas fa-laptop'></i> Electronics</Nav.Link>
              </LinkContainer>
            </Nav>
            <Nav className="ms-auto">
              <LinkContainer to="/login">
                <Nav.Link><i className='fas fa-user'></i> Login</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart">
                <Nav.Link><i className='fas fa-shopping-cart'></i> Cart</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
