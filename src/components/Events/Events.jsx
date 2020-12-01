import React, { useState } from 'react';
import { Modal, Card, Image, Badge, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import defaultEvent from './../../Assets/img/defaultEvent.jpg';
import maps from './../../Assets/img/maps.jpeg';
import Event from './Event'


export default function Events() {
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

  const EventName = "Business Intelligence ";
  const EventDate = "Mier 3 Oct";
  const EventYear = "2020";
  const EventHour = "12:30hr";
  const EventOrg = "IBM";
  const EventLocation = " Av. Té 950, Granjas México, Iztacalco, 08400 Ciudad de México, CDMX ";
  const EventPrice = "899";
  const EventCost = `$ ${EventPrice} MXN`;
  const EventDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nibh purus, elementum ac lacinia id, viverra nec nulla. Cras dapibus arcu a est rutrum ultrices. Vivamus pharetra commodo suscipit. Cras ultricies sollicitudin nisi ut vehicula. Nam quis tortor dignissim, faucibus risus vel, varius urna. Morbi feugiat enim ac purus bibendum congue.";


  return (
    <div>
      <h1>Eventos</h1>
      <div className="miniEventos">
        <Event />
        <Event />
        <Event />
        <Event />
      </div >
      <div>
        <Card className="leftcard ">
          <Card.Img variant="top" src={defaultEvent} />
          <Card.Body>
            <Card.Title>{EventDate} {EventHour}</Card.Title>
            <Card.Title>Nickname</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{EventOrg}</Card.Subtitle>
            <Card.Text>
              <h4>{EventName}</h4>
            </Card.Text>
            <Card.Link className="linkButton" href="#" onClick={handleShow}>Editar</Card.Link>
          </Card.Body>
        </Card>
      </div>

    </div>
  )
}