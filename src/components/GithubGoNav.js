import React from 'react'
import { Navbar, Nav, NavDropdown, Form, Button } from 'react-bootstrap'

const GithubGoNav = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Github: The Gathering</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/* <Nav.Link href="#home">abut</Nav.Link> */}
          <Nav.Link href="https://www.zackmckenna.com">made by zackmckenna</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default GithubGoNav;
