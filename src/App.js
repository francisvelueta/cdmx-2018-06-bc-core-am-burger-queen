import React, { Component } from 'react';
import './App.css';


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

export default App;
