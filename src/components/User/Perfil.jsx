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
      <img src={Profile} alt="" className="imgRedonda" />
    </div >
  )
}
