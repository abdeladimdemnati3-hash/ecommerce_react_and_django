import React from 'react'
import { Navbar, Nav,Container  } from 'react-bootstrap';
function Header() {
  return (
    <header>
         <Navbar bg='dark' variant='dark' expand="lg"  collapseOnSelect>
      <Container>
        <Navbar.Brand href="/">PspShop</Navbar.Brand> {/* Updated brand name */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav> {/* This Nav will contain items on the left */}
            <Nav.Link href="/service"><i className='fas fa-info-circle'></i>Service</Nav.Link> {/* Corrected icon */}
          </Nav>
          <Nav className="ms-auto"> {/* This Nav will push its content to the far right */}
            <Nav.Link href="/Login"><i className='fas fa-user'></i>Login</Nav.Link> {/* Moved Login to the right */}
            <Nav.Link href="/Cart"><i className=' fas fa-shopping-cart'></i>Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  );
}

export default Header;
