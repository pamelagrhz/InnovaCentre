import React, { useState } from 'react';
import { Modal, Card, Row, Col, Badge, Button, Nav, Form, FormControl, NavDropdown, Tab, Tabs } from 'react-bootstrap';
import Profile from '../../Assets/img/profile.jpeg'
import Switch from '../StyleComponent/Switch'

export default function UsersList() {

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
    },
    permits: {
      users: false,
      events: true,
    }
  }


  const [value, setValue] = useState(false);
  var toggler = document.querySelector('.toggle-switch');
  // toggler.onclick = function () {
  //   toggler.classList.toggle('active');
  // }
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <div>
      <h2>Gestión de usuarios</h2>
      {/* Filtro */}
      <Tabs defaultActiveKey="Estudiantes" className="black" transition={false} id="noanim-tab-example">
        <Tab eventKey="home" className="black" title="Home">
          {/* Usuarios */}
          <Card className="leftcard mini-card user-list">
            <div className="center">
              <Card.Img variant="top" src={Profile} className="imgRedonda center" />
            </div>

            <Card.Body>
              <Card.Subtitle className="mb-2 text-muted">@{user.uname}</Card.Subtitle>
              <Card.Title>{user.name} {user.lname}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{user.mail}</Card.Subtitle>
              <Card.Text >
                <p>Estudiante: {user.study.studing}</p>
              </Card.Text>
              <Form>
                {['checkbox'].map((type) => (
                  <div className="row center">
                    <Form.Check
                      disabled checked
                      type="checkbox"
                      id="UsersPermits"
                      label="Users"
                    />

                    <Form.Check
                      disabled
                      type="checkbox"
                      label="Events"
                      id="EventsPermits"
                    />
                    <Form.Check
                      disabled checked
                      type="checkbox"
                      id="NewsPermits"
                      label="News"
                    />
                  </div>
                ))}
              </Form>
              <Button onClick={handleShow} href="">+</Button>
            </Card.Body>
          </Card>
        </Tab>
        <Tab eventKey="profile" title="Profile">
          some
        </Tab>
        <Tab eventKey="contact" title="Contact">
          some
        </Tab>
      </Tabs>




      {/* Modelo a mostrar */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Datos del usuario @{user.uname}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="center">
            <Card.Img variant="top" src={Profile} className="imgRedonda center" />
          </div>
          <div className="center">
            <Card.Link>Resetear imagen</Card.Link>
          </div>
          <Form>
            {/* Nombre */}
            <Form.Group as={Row} controlId="formPlaintextName">
              <Form.Label column sm="2">
                Nombre:
              </Form.Label>
              <Col sm="10">
                <Form.Control plaintext readOnly defaultValue={user.name + " " + user.lname} />
              </Col>
            </Form.Group>
            {/* User */}
            <Form.Group as={Row} controlId="formPlaintextUser">
              <Form.Label column sm="2">
                Usuario:
              </Form.Label>
              <Col sm="10">
                <Form.Control plaintext readOnly defaultValue={"@" + user.uname} />
              </Col>
            </Form.Group>
            {/* Birthday */}
            <Form.Group as={Row} controlId={"formPlaintextBirthday"}>
              <Form.Label column sm="2">
                F.Nac.:
              </Form.Label>
              <Col sm="10">
                <Form.Control plaintext readOnly defaultValue={user.bt} />
              </Col>
            </Form.Group>
            {/* Email */}
            <Form.Group as={Row} controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Email:
              </Form.Label>
              <Col sm="10">
                <Form.Control plaintext readOnly defaultValue={user.mail} />
              </Col>
            </Form.Group>
            {/* Genero */}
            <Form.Group as={Row} controlId="formPlaintextGendre">
              <Form.Label column sm="2">
                Genero:
              </Form.Label>
              <Col sm="10">
                <Form.Control plaintext readOnly defaultValue={user.gendre} />
              </Col>
            </Form.Group>
            {/* Servicios */}
            <h6>Permisos:</h6>
            <Form.Group>
              <div className="center">
                <Form.Check
                  type="checkbox"
                  id=""
                  label="Noticias  "
                />
                <Form.Check
                  type="checkbox"
                  id=""
                  label="Usuarios  "
                />
                <Form.Check
                  type="checkbox"
                  id=""
                  label="Eventos  "
                />
              </div>

            </Form.Group>
            <a href="">Resetear passwd</a>
            <div><a href="">Deshabilitar usuario</a></div>
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