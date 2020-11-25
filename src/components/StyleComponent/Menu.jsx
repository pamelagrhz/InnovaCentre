import React from 'react';

import { Badge } from 'react-bootstrap'
import Profile from '../../Assets/img/profile.jpeg'

export default function Stars() {
  return (
    <div className="menu">
      <nav className="user-menu">
        <img src={Profile} alt="" className="imgRedonda" />
        <li class="parent">
          <a href="#">Eventos <Badge variant="primary">150</Badge>{' '}</a>
          <ul>
            <li><a href="#">Vigentes<Badge variant="primary">23</Badge>{' '}</a></li>
            <li><a href="#">Pasados<Badge variant="primary">23</Badge>{' '}</a></li>
            <li><a href="#">Cancelados<Badge variant="primary">23</Badge>{' '}</a></li>
          </ul>
        </li>
        <li><a href="#">Editar perfil</a></li>
        <li><a href="#">Seguidos<Badge variant="primary">12</Badge>{' '}</a></li>
        <li><a href="#">Cerrar perfil</a></li>
      </nav>

    </div >

  )
}