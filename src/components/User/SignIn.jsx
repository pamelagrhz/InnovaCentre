import React from 'react';
import { Card, Form, Button, Nav } from 'react-bootstrap';

export default function SignIn() {
  return (
    <div className='sign-in'>
      <h1>Iniciar sesión</h1>
      <Card>
        <Card.Body>
          <Form>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Password" />

            </Form.Group>
            <Form.Group controlId="formCheckbox">
              <Nav.Link className="linkButton" href="/signout">Aun no tengo una cuenta.</Nav.Link>
              <Nav.Link className="linkButton" href="#">Olvidé mi contraseña.</Nav.Link>
              <Form.Check type="checkbox" label="Recuerdame" />
            </Form.Group>
            <Button variant="primary" type="submit" size="lg" block>
              Ingresar
  </Button>
          </Form>
        </Card.Body>
      </Card>



    </div >
  )
}