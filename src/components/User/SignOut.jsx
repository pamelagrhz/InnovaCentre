import React from 'react';
import { Form, Card, Col, Button, InputGroup, FormControl, Row, Nav } from 'react-bootstrap';

export default function SignOut() {

  return (
    <div>
      <h1>Registrate</h1>
      <Card>
        <Card.Body>
          <Form>
            {/* Nombre */}
            <Row>
              <Col>
                <Form.Group controlId="formName">
                  <Form.Control placeholder="Nombre" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formLName">
                  <Form.Control placeholder="Apellido" />
                </Form.Group>
              </Col>
            </Row>


            {/* usuario */}
            <InputGroup className="mb-4">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
              </InputGroup.Prepend >
              <FormControl
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              <InputGroup.Prepend>
                <Button variant="outline-secondary">Disponibilidad</Button>
              </InputGroup.Prepend>
            </InputGroup>

            {/* Mail */}
            <Form.Group as={Row} className="mb-3" controlId="formEmail">
              <Form.Label column sm={2}>
                Email
               </Form.Label>
              <Col sm={10}>
                <Form.Control type="email" placeholder="Email" />
              </Col>
            </Form.Group>
            {/* Passwords */}
            <Form.Row>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridConfirmPassword">
                <Form.Label>Confirma tu contraseña</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Form.Row>

            <Form.Row>

              {/* Nacimiento */}
              <Form.Group as={Col} controlId="formBirthday">
                <Form.Label >F. de Nacimiento</Form.Label>

                <Form.Control type="date" placeholder="Apellido(s)" />

              </Form.Group>
              {/* Genero */}
              <Form.Group as={Col} controlId="formGender">
                <Form.Label>Genero</Form.Label>

                <Form.Control as="select" defaultValue="Seleccionar...">
                  <option>Femenino</option>
                  <option>Masculino</option>
                  <option>Otro</option>
                </Form.Control>

              </Form.Group>
            </Form.Row>

            {/* Telefono */}

            <Form.Group as={Row} className="mb-3" controlId="formPhone">
              <Form.Label column sm={2}>
                Telefono
               </Form.Label>
              <Col sm={10}>
                <Form.Control type="number" placeholder="55-00-00-00-00" />
              </Col>
            </Form.Group>
            {/* Estudia? */}
            <Form.Group as={Row} className="mb-3" controlId="formStudy">
              <Form.Label column sm={5} >Te encuentras estudiando?</Form.Label>
              <Col sm={7}>
                <Form.Control as="select" defaultValue="Seleccionar...">
                  <option>Si</option>
                  <option>No</option>
                </Form.Control>
              </Col>

            </Form.Group>

            {/* nivel */}
            <Form.Group as={Row} className="mb-3" controlId="formGridLevel">
              <Form.Label column sm={2} >Nivel</Form.Label>
              <Col sm={10}>
                <Form.Control as="select" defaultValue="Seleccionar...">
                  <option>Media superior</option>
                  <option>Superior</option>
                  <option>Egresado</option>
                </Form.Control>
              </Col>

            </Form.Group>

            {/* Escuela */}
            <Form.Row>
              <Form.Group as={Col} controlId="formGridSchoolName">
                <Form.Label>Escuela</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                  <option>UPIICSA</option>
                  <option>ESCA</option>
                </Form.Control>
              </Form.Group>
              {/* Boleta */}
              <Form.Group as={Col} className="mb-3" controlId="formBoleta">
                <Form.Label>
                  Boleta
               </Form.Label>
                <Form.Control type="number" placeholder="2020000001" />
              </Form.Group>

            </Form.Row>
            <Nav.Link className="linkButton" href="/signin">Ya tengo una cuenta.</Nav.Link>

            {/* Checkbox */}
            <Form.Group id="formGridCheckbox">
              <Form.Check type="checkbox" label="Recordarme" />
            </Form.Group>
            {/* Boton */}
            <Button variant="primary" type="submit" size="lg" block>
              Confirmar
  </Button>
          </Form>
        </Card.Body>
      </Card>
    </div >
  )
}