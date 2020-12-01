import React from 'react';
import { Tab, Row, Col, Nav, Badge, Card, Form, Button } from 'react-bootstrap';

import { ProSidebar } from 'react-pro-sidebar';
import { Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import Profile from '../../Assets/img/profile.jpeg'
import UserMenu from '../StyleComponent/Menu'
import EditProfile from './EditProfile'
import Event from '../Events/Event'
import 'react-pro-sidebar/dist/css/styles.css';

export default function Perfil() {
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
    }
  }
  return (
    <div className='sign-in'>

      <Tab.Container id="left-tabs-example" defaultActiveKey="first">

        <UserMenu />

        <Tab.Content>
          <Tab.Pane eventKey="Events">
            <Event />
          </Tab.Pane>
          <Tab.Pane eventKey="editProfile">
            <EditProfile />
          </Tab.Pane>
          <Tab.Pane eventKey="Follow">
            Follows
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>




    </div >
  )
}
