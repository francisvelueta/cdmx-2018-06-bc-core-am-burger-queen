import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './App.css';
import { firebaseApp } from './config/firebase';
import { withRouter } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Menu from './components/Menu';

class App extends Component {
  render() {
    return (
      <div>
      <Navbar/>
      <Menu/>
      </div>
    );
  }
}

export default withRouter(App);
