import React from 'react';
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';


export default function NavBar() {
  return (
    <div>
      <div>
        <Navbar className="primary" bg="primary" sticky="bottom" variant="dark">
          <Navbar.Brand href="#home">Innova Centre</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="mailto:contacto@innovacentre.com.mx">Contactanos</Nav.Link>
          </Nav>
          <Form inline>
            <Nav.Link href="/signout">Registrarse</Nav.Link>
            <Nav.Link href="/signin">/ Iniciar sesión</Nav.Link>
            <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
            <Button variant="outline-light">Buscar</Button>
          </Form>
        </Navbar>
        <br />
      </div>
    </div>

  )
}