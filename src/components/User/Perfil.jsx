import React from 'react';
import { Card, Tab, Row, Col, Sonnet, Nav } from 'react-bootstrap';

export default function Perfil() {
  return (
    <div className='sign-in'>
      <h1>Iniciar sesión</h1>


      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Tab 1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab 2</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <div>pecaanfkwjrfnkjfna  1
                    </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <div>pecaanfkwjrfnkjfna  2
                    </div>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>




    </div >
  )
}
