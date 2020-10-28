import React, { useState } from 'react';
import { Button, Jumbotron, Carousel } from 'react-bootstrap';
import maps from '../Assets/img/image.jpg';
import img1 from '../Assets/img/conf.jpg';
import img2 from '../Assets/img/defaultEvent.jpg';



export default function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <p>Home</p>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Encuentra un curso</h3>
            <p>Puedes encontrar cursos gratuitos o con costo.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={img2}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Asiste a conferencias</h3>
            <p>Asiste a alguna conferencia donde los profesionales comparten sus experiencias.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={maps}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>¿Eres organizador?</h3>
            <p>Contactate con nosotros!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Jumbotron>
        <h1>Encuentra un curso!</h1>
        <p>
          Es muy sencillo, registrate, y busca algun evento de tu interes.
  </p>
        <p>
          <Button variant="primary" href="/event">Ver eventos</Button>
        </p>
      </Jumbotron>
    </div >
  )
}
