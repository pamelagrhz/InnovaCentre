import React, { useState } from 'react';
import { Form, Col, Button, Card, Row, InputGroup, FormControl } from 'react-bootstrap';

export default function EventAdd() {
  return (
    <div>
      <h1>Agregar Eventos</h1>
      <Card>
        <Card.Body>
          <Form>

            <Form.Group controlId="formEventName">
              <Form.Label>Nombre del evento</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formEventDate">
                <Form.Label>Fecha </Form.Label>
                <Form.Control type="date" placeholder="Enter email" />
              </Form.Group>
              <Form.Group as={Col} controlId="formEventHour">
                <Form.Label>Hora </Form.Label>
                <Form.Control type="time" placeholder="Enter email" />
              </Form.Group>
            </Form.Row>


            <Form.Group controlId="formEventDescription">
              <Form.Label>Descripción</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group>
              <Form.File id="EventFile" label="Foto referente al evento" />
            </Form.Group>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridAddress1">
                <Form.Label>Calle</Form.Label>
                <Form.Control placeholder="Av. Río Churubusco" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridAddress2">
                <Form.Label>Numero</Form.Label>
                <Form.Control type="number" placeholder="55-7" />
              </Form.Group>

            </Form.Row>
            <Form.Label>Dirección</Form.Label>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Estado</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>CDMX</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Delegación/Municipio</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Codigo Postal</Form.Label>
                <Form.Control />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formEventPrice">
                <Form.Label>Precio (MXN)</Form.Label>
                <Form.Control type="number" />
              </Form.Group>
              <Form.Group as={Col} controlId="formEventMax Inv">
                <Form.Label>Máximo de invitados</Form.Label>
                <Form.Control type="number" />
              </Form.Group>
            </Form.Row>

            <Form.Group as={Row}>
              <Form.Label as="legend" column sm={4}>
                Metodos de pago
      </Form.Label>
              <Col sm={8}>
                <Form.Check
                  type="radio"
                  label="Solo efectivo."
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
                <Form.Check
                  type="radio"
                  label="Solo método digital."
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                />
                <Form.Check
                  type="radio"
                  label="Todos los metodos"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios3"
                />
              </Col>
            </Form.Group>
            <Form.Group id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <h1>Registrar administradores</h1>
      <Card>
        <Card.Body>
          <Form>
            <Form.Row className="align-items-center">
              <Col >
                <Form.Label htmlFor="inlineFormInput" srOnly>
                  Name
                </Form.Label>
                <Form.Control className="mb-3" id="inlineFormInput" placeholder="Nombre" />
              </Col>
              <Col >
                <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                  Username
      </Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text>@</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl id="inlineFormInputGroup" placeholder="User name" />
                </InputGroup>
              </Col>
            </Form.Row>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
    </Form.Text>
            </Form.Group>
            <Form.Group controlId="formEventDescription">
              <Form.Label>Descripción</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Form.Group as={Row} controlId="formFacebook">
              <Form.Label column sm="4">
                Facebook
                </Form.Label>
              <Col sm="8">
                <Form.Control type="text" placeholder="Facebook" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formTwitter">
              <Form.Label column sm="4">
                Twitter
                </Form.Label>
              <Col sm="8">
                <Form.Control type="text" placeholder="Twitter" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formLinkedin">
              <Form.Label column sm="4">
                Linkedin
                </Form.Label>
              <Col sm="8">
                <Form.Control type="text" placeholder="Linkedin" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formInstagram">
              <Form.Label column sm="4">
                Instagram
                </Form.Label>
              <Col sm="8">
                <Form.Control type="text" placeholder="Instagram" />
              </Col>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div >
  )
}