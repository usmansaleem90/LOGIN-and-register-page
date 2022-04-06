import React from 'react'
import './Naav.css'
import { Navbar,Nav,Container } from 'react-bootstrap'
import {Link} from "react-router-dom"
const Naav = () => {
  return (
    <>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='color'>
  <Container>
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link >
        <Link to="/">Home</Link>
      </Nav.Link>
      <Nav.Link >About</Nav.Link>
      <Nav.Link >AddTodo</Nav.Link>
      <Nav.Link >Admin</Nav.Link>
    
    </Nav>
    <Nav>
      <Nav.Link>
        <Link to ="/log">Login</Link>
      </Nav.Link>
      <Nav.Link >
      <Link to="/register"> Registration</Link>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  )
}

export default Naav