import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './components/Navbar.jsx';
import SignIn from './components/User/SignIn';
import Perfil from './components/User/Perfil';
import SignOut from './components/User/SignOut'
import Footer from './components/Footer';
import Event from './components/Events/Event'
import EventAdd from './components/Events/EventAdd'
import Home from './components/Home';
import UsersList from './components/Admin/UsersList';
import './App.css';

function App() {
  return (
    <div className="App" >
      <NavBar />
      <div className="content">
        <Router>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/users-list">
              <UsersList />
            </Route>
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/signout">
              <SignOut />
            </Route>
            <Route path="/event">
              <Event />
            </Route>
            <Route path="/eventadd">
              <EventAdd />
            </Route>
            <Route path="/perfil">
              <Perfil />
            </Route>
          </Switch>
        </Router >
      </div>

      <Footer />

    </div >

  );
}

export default App;