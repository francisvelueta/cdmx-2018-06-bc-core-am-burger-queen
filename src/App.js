import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './App.css';
import { firebaseApp } from './config/firebase';
import { withRouter } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div>
      <Navbar/>
      </div>
    );
  }
}

export default withRouter(App);
