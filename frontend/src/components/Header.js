import React from 'react'
// import { Link } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'

function Header() {
  return (
    <div>
      <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
          <Container>
            <Link to="/">
              <Navbar.Brand>ProShop</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/cart">
                  <i className="fas fa-shopping-cart"></i> Cart
                </Nav.Link>
                <Nav.Link as={Link} to="/login">
                  <i className="fas fa-user"></i>Sign In
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </div>
  )
}

export default Header
