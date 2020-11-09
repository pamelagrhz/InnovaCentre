import React from 'react';
import { Tab, Row, Col, Nav, Badge } from 'react-bootstrap';

import { ProSidebar } from 'react-pro-sidebar';
import { Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import Profile from '../../Assets/img/profile.jpeg'

import 'react-pro-sidebar/dist/css/styles.css';

export default function Perfil() {
  return (
    <div className='sign-in'>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <ProSidebar>
                <Menu iconShape="square">
                  <MenuItem disabled eventKey="first" className="center" > <img src={Profile} alt="" className="imgRedonda" /></MenuItem>
                  <MenuItem disabled eventKey="first" ><h4>Mark Otto</h4></MenuItem>

                  <MenuItem eventKey="first" >Mi perfil</MenuItem>
                  <MenuItem eventKey="first" >Seguidos <Badge variant="primary">113</Badge>{' '}</MenuItem>
                  <SubMenu title="Eventos" >
                    <MenuItem>Pendientes <Badge variant="primary">56</Badge>{' '}</MenuItem>
                    <MenuItem>Pasados<Badge variant="primary">7</Badge>{' '}</MenuItem>
                    <MenuItem>Cancelados<Badge variant="primary">0</Badge>{' '}</MenuItem>
                  </SubMenu>
                  <MenuItem >A casa
          <Link to="/home" /></MenuItem>
                </Menu>

              </ProSidebar>;

              <Nav.Item>
                <Nav.Link eventKey="first" variant="light">Mis eventos</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second" variant="light">Mi Perfil</Nav.Link>
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
                aliudnaisdnbslkhdbashdbalsjhdbashdbaliudnaisdnbslkhdbashdbalsjhdbashdbaliudnaisdnbslkhdbashdbalsjhdbashdb
                aliudnaisdnbslkhdbashdbalsjhdbashdbaliudnaisdnbs
                lkhdbashdbalsjhdbashdb
                aliudnaisdnbslkhdbashdbalsjhdbashdbaliudnaisdnbslkhdbashdbalsjhdbashdbaliudnaisdnbslkhdbashdbalsjhdbashdb
                aliudnaisdnbslkhdbashdbalsjhdbashdbaliudnaisdnbslkhdbashdbalsjhdbashdbaliudnaisdnbslkhdbashdbalsjhdbashdb
                aliudnaisdnbslkh
                dbashdbalsjhdbashdbaliudnaisdnbslkhdbashdbalsjhdbashdbaliudnaisdnbslkhdbashdbalsjhdbashdbaliudnaisdnbslkhd
                bashdbalsjhdbashdbaliudnaisdnbslkhdbashdbals
                jhdbashdbaliudnaisdnbslkhdbashdbalsjhdbashdbaliudnaisdnbslkhdbashdbalsjhdbashdbaliudnaisdnbslkhdbashdbals
                jhdbashdbaliudnaisdnbslkhdbashdbalsjhdbashdbaliudn
                aisdnbslkhdbashdbalsjhdbashdbaliudnaisdnbslkhdbashdbalsjhdbashdbaliudnaisdnbslkhdbashdbalsjhdbashdbaliudn
                aisdnbslkhdbashdbalsjhdbashdb
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>






    </div >
  )
}
