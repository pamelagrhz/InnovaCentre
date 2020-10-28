import React, { useState } from 'react';
import { Modal, Card, Image, Badge, Button, Accordion } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import defaultEvent from './../../Assets/img/defaultEvent.jpg';
import maps from './../../Assets/img/maps.png';

export default function Event() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function colorDay(today = new Date()) {
    var color = "Light";
    console.log(today)
    if (today === today) {
      color = "warning";
    }
    return color;
  }
  return (
    <div>
      <h1>Eventos</h1>
      <div className="miniEventos">
        <Card className="leftcard mini-card">
          <Card.Img variant="top" src={defaultEvent} />
          <Card.Body>
            <Card.Title>Mier 3 Oct  12:30hr</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Nombre del organizador</Card.Subtitle>
            <Card.Text>
              <h4>Nombre del evento</h4>
            </Card.Text>
            <Card.Link className="linkButton" href="#" onClick={handleShow}>Ver más</Card.Link>
          </Card.Body>
        </Card>
        <Card className="leftcard mini-card">
          <Card.Img variant="top" src={defaultEvent} />
          <Card.Body>
            <Card.Title>Mier 3 Oct  12:30hr</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Nombre del organizador</Card.Subtitle>
            <Card.Text>
              <h4>Nombre del evento</h4>
            </Card.Text>
            <Card.Link className="linkButton" href="#" onClick={handleShow}>Ver más</Card.Link>
          </Card.Body>
        </Card>
        <Card className="leftcard mini-card">
          <Card.Img variant="top" src={defaultEvent} />
          <Card.Body>
            <Card.Title>Mier 3 Oct  12:30hr</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Nombre del organizador</Card.Subtitle>
            <Card.Text>
              <h4>Nombre del evento</h4>
            </Card.Text>
            <Card.Link className="linkButton" href="#" onClick={handleShow}>Ver más</Card.Link>
          </Card.Body>
        </Card>

        <Card className="leftcard mini-card">
          <Card.Img variant="top" src={defaultEvent} />
          <Card.Body>
            <Card.Title>Mier 3 Oct  12:30hr</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Nombre del organizador</Card.Subtitle>
            <Card.Text>
              <h4>Nombre del evento</h4>
            </Card.Text>
            <Card.Link className="linkButton" href="#" onClick={handleShow}>Ver más</Card.Link>
          </Card.Body>
        </Card>


      </div>

      {/* Modelo a mostrar */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Nombre del evento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={defaultEvent} fluid></Image>
          <Badge pill className="space-around" variant="light">
            Nombre del organizador
        <Button size="sm">Seguir</Button>
          </Badge>{' '}
          <Badge className="space-around" pill variant={colorDay()}>
            Mar 5 Oct 2020  12:30hr
          <a href="#">+ Añadir a calendar</a>
          </Badge>{' '}
          <br />
          <p><FontAwesomeIcon icon={faMapMarkerAlt} />      Av. Té 950, Granjas México, Iztacalco, 08400 Ciudad de México, CDMX </p>
          {/* api maps */}
          <Image src={maps} fluid ></Image>
          <br />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nibh purus, elementum ac lacinia id, viverra nec nulla. Cras dapibus arcu a est rutrum ultrices. Vivamus pharetra commodo suscipit. Cras ultricies sollicitudin nisi ut vehicula. Nam quis tortor dignissim, faucibus risus vel, varius urna. Morbi feugiat enim ac purus bibendum congue. </p>

        </Modal.Body>
        <Modal.Footer>
          <p>Precio: Gratis</p>
          <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
          <Button variant="primary" onClick={handleClose}>
            Agregar a mi carrito
          </Button>
        </Modal.Footer>
      </Modal>


    </div >
  )
}