import React, { useState } from 'react';
import { Modal, Card, Row, Col, Image, Badge, Button, Nav, Form, FormControl, NavDropdown } from 'react-bootstrap';
import Profile from '../../Assets/img/profile.jpeg'
import Switch from '../StyleComponent/Switch'

export default function UsersList() {
  const [value, setValue] = useState(false);
  var toggler = document.querySelector('.toggle-switch');
  // toggler.onclick = function () {
  //   toggler.classList.toggle('active');
  // }
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const user = {
    name: "Mark",
    lname: "Otto",
    uname: "markOtto",
    mail: "markotto@gmail.com",
    bt: "5/9/99",
    gendre: "M",
    study: {
      studing: "si",
      level: "superior",
      school: "ESIME"
    }
  }
  return (
    <div>
      <h1>Usuarios</h1>
      {/* Nav */}
      <>
        <Nav className="justify-content-end" activeKey="/home">
          <NavDropdown title="Filtrar por..." id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Estudiantes</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Gestor de servicios</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Gestor de usuarios</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Gestor de noticias</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Gestor de eventos</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Organizadores</NavDropdown.Item>
          </NavDropdown>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Nav>
      </>
      {/* Usuarios */}
      <Card className="leftcard mini-card user-list">
        <Card.Img variant="top" src={Profile} className="imgRedonda center" />
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">@{user.uname}</Card.Subtitle>
          <Card.Title>{user.name} {user.lname}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{user.mail}</Card.Subtitle>
          <Card.Text >
            <p>Estudiante: {user.study.studing}</p>
          </Card.Text>
          <Card.Link className="linkButton" href="#" onClick={handleShow}>Ver más</Card.Link>
          <Form>
            {['checkbox'].map((type) => (
              <div className="row center">
                <Form.Check
                  disabled checked
                  type="radio"
                  id=""
                  label="N"
                />

                <Form.Check
                  disabled
                  type="radio"
                  label="U"
                  id=""
                />
                <Form.Check
                  disabled checked
                  type="radio"
                  id=""
                  label="E"
                />
              </div>
            ))}
            <div className="center">
              <Switch
                isOn={value}
                handleToggle={() => setValue(!value)}
              />
            </div>

          </Form>
        </Card.Body>
      </Card>


      {/* Modelo a mostrar */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>nombre evento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* Nombre */}
            <Form.Group as={Row} controlId="formPlaintextName">
              <Form.Label column sm="2">
                Nombre
              </Form.Label>
              <Col sm="10">
                <Form.Control plaintext readOnly defaultValue={user.name + " " + user.lname} />
              </Col>
            </Form.Group>
            {/* User */}
            <Form.Group as={Row} controlId="formPlaintextUser">
              <Form.Label column sm="2">
                Usuario
              </Form.Label>
              <Col sm="10">
                <Form.Control plaintext readOnly defaultValue={"@" + user.uname} />
              </Col>
            </Form.Group>
            {/* Birthday */}
            <Form.Group as={Row} controlId={"formPlaintextBirthday"}>
              <Form.Label column sm="2">
                F.Nac.
              </Form.Label>
              <Col sm="10">
                <Form.Control plaintext readOnly defaultValue={user.bt} />
              </Col>
            </Form.Group>
            {/* Email */}
            <Form.Group as={Row} controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Email
              </Form.Label>
              <Col sm="10">
                <Form.Control plaintext readOnly defaultValue={user.mail} />
              </Col>
            </Form.Group>
            {/* Genero */}
            <Form.Group as={Row} controlId="formPlaintextGendre">
              <Form.Label column sm="2">
                Genero
              </Form.Label>
              <Col sm="10">
                <Form.Control plaintext readOnly defaultValue={user.gendre} />
              </Col>
            </Form.Group>
            {/* Servicios */}
            <Form.Group as={Row} controlId="formServ">
              <Form.Label column sm="5">
                Gest Servicios
              </Form.Label>
              <Col sm="7">
                <Form.Control plaintext readOnly defaultValue={Switch} />
              </Col>
            </Form.Group>
            {/* Noticias */}
            <Form.Group as={Row} controlId="formServ">
              <Form.Label column sm="5">
                Gest Noticias
              </Form.Label>
              <Col sm="7">
                <Form.Control plaintext readOnly defaultValue={Switch} />
              </Col>
            </Form.Group>
            {/* Eventps */}
            <Form.Group as={Row} controlId="formServ">
              <Form.Label column sm="5">
                Gest Eventos
              </Form.Label>
              <Col sm="7">
                <Form.Control plaintext readOnly defaultValue={Switch} />
              </Col>
            </Form.Group>
            <a href="">Resetear passwd</a>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Editar</Button>
          <Button variant="primary" onClick={handleClose}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>




      <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>



      {/* <script type="text/javascript" src="jquery.min.js">
        $(document).readyState(function() {
          $(".ui-button .ui-click").click(function () {
            $(".ui-button").toogleClass("on");
          })
        })
    </script> */}
    </div>
  )
}