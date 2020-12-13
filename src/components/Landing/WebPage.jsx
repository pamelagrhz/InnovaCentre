
import React from 'react';
import {Navbar, Nav, NavDropdown, Card, Form, Button, Col, Container, Row } from 'react-bootstrap';
import Network from '../../Assets/img/network.png'

export default function NavBar() {
  return (
    <div className="landing">
      <Container>
  <Row>
    <Col>
    <h1>Página web
      </h1>
      <p className="black">Una Página web es un medio digital para promover productos, servicios o información de interés, se consultan a través de una computadora, tableta o Smartphone.</p>
      <p>También es una herramienta valiosa de mercadotecnia para cualquier empresa que requiera de obtener nuevos clientes promoviendo productos o servicios.</p>
      
    </Col>
    <Col md="auto">Variable width content</Col>
    <Col xs lg="2">
      3 of 3
    </Col>
  </Row>
</Container>
     <h2>Clasificación de páginas web</h2>
      <br />
      <h3>PÁGINAS WEB ESTÁTICAS</h3>
      <p>Son sitios pequeños que contienen poca información, no cuentan con gestor de contenido y su uso más común es como folletos virtuales de algún servicio o productos.</p>
      <br />
      <h3>PÁGINAS WEB DINÁMICAS</h3>
      <p>Son sitios pequeños que cuentan con un gestor de contenido que permite al administrador del sitio modificar la información en cualquier momento sin contar con conocimientos de programación y diseño.</p>
      <br />
      <h3>PÁGINAS WEB AUTOADMINISTRABLES</h3>
      <p>Son sitios que pueden tener pequeñas o grandes cantidades de información, se construyen mediante un CMS (Sistema de Gestión de Contenidos), algunos de los más populares son: Wordpress y Joomla, cuentan con diversas aplicaciones como son: foros, formularios de contacto, suscripción a noticias, chats, etc., tienen un administrador general que a su ves puede autorizar a otros usuarios a administrar ciertas secciones de la pagina.</p>
      <h3>CATALOGOS VIRTUALES</h3>
      <p>Son sitios web que permiten la publicación de imágenes y características que corresponden a productos, pueden ser modificados constantemente en base a las necesidades del administrador.</p>
      <h3>TIENDAS VIRTUALES</h3>
      <p>Son sitios que permiten la publicación de productos o servicios y que pueden ser adquiridos en línea mediante la realización de un pago a través de transacciones electrónicas, cuentan con catalogo de productos, carrito de compras y gestor de pagos.</p>
      <h3>PORTALES</h3>
      <p>Son grandes sitios de internet que contienen mucha información ordenada mediante categorías, pueden incorporar chats, foros, noticias, buscador y múltiples servicios en línea.
</p>

      <div className="client-div">

        <Form className="client-form">
          <h2>Contactanos</h2>
          <Form.Group controlId="formGroupName">
            <Form.Label>Nombre*</Form.Label>
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Correo*</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formGroupPhone">
            <Form.Label>Telefono*</Form.Label>
            <Form.Control type="number" placeholder="55-55-55-55-55" />
          </Form.Group>
          <Form.Group controlId="formGroupName">
            <Form.Label>Empresa/Escuela</Form.Label>
            <Form.Control type="text" placeholder="Empresa/Escuela" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Servicio de interés</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>Pagina web </option>
              <option>App Movil</option>
              <option>Diseño grafico </option>
            </Form.Control>
          </Form.Group>
          <Form.Text className="text-muted">
            * Campos obligatorios
    </Form.Text>
          <Button variant="primary" type="submit">
            Submit
  </Button>
        </Form>
        <span className="contact-us"><img src={Network} alt="" /></span>

      </div>

    </div >

  )
}