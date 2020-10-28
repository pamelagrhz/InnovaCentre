import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from './../Assets/img/logo.png';



export default function NavBar() {
  return (
    <div>
      <div>
        <Navbar className="primary" bg="primary" sticky="bottom" variant="dark">
          <Navbar.Brand href="/home" className="logo" >  <img src={logo} /></Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link >Contactanos</Nav.Link>
          </Nav>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/signout">Registrarse</NavDropdown.Item>
            <NavDropdown.Item href="/signin">Iniciar sesión</NavDropdown.Item>
            <NavDropdown.Item href="/event">Eventos</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>



        </Navbar>
        <br />
      </div>
    </div >

  )
}