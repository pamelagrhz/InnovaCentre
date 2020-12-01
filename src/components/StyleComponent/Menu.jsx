import React from 'react';

import { Badge, Nav } from 'react-bootstrap'
import Profile from '../../Assets/img/profile.jpeg'

export default function Stars() {
  return (
    <div className="menu">
      <nav className="user-menu">
        <img src={Profile} alt="" className="imgRedonda" />
        <Nav variant="pills" className="flex-column">
          <Nav.Item>
            <Nav.Link eventKey="Events">Eventos <Badge variant="primary">150</Badge></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="editProfile">Editar Perfil</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Follow">Seguidos<Badge variant="primary">12</Badge></Nav.Link>
          </Nav.Item>
        </Nav>
      </nav>

    </div >

  )
}