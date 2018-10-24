import React, { Component } from 'react';
import {Grid, Cell, Textfield, Button } from 'react-mdl';
import { firebaseApp } from '../config/firebase';
import { withRouter } from 'react-router-dom';
import logo from './../assets/logo.png';

class SignIn extends Component {
  constructor(props) {
     super(props);
     this.state = {
       email: '',
       password: '',
       error: {
         message: ''
       }
     }
   }
   signIn() {
     // console.log('this.state', this.state);
     const { email, password } = this.state;
     firebaseApp.auth().signInWithEmailAndPassword(email, password)
     .then(result => this.props.history.push('/'))
     .catch(error => { this.setState({ error }) });
}

  render() {
    return(
      <div >
      <Grid className="landing-grid">
      <Cell col ={7} offset={5}>
      <img className= 'logo-img' src = {logo} alt='Burguer Queen logo'/>
  </Cell>
    <Cell col ={4} offset={6}>
    <Textfield
    onChange = { event => this.setState({ email: event.target.value })}
    label="Correo"
    type = "email"
    style={{width: '200px'}}
    />
    </Cell>
        <Cell col ={4} offset={6}>
    <Textfield
    onChange = { event => this.setState({ password: event.target.value })}
    label="Password"
    type = "password"
    style={{width: '200px'}}
    />
    </Cell>
<Cell col ={6} offset={6}>
<Button raised accent ripple onClick = { () => this.signIn() } >Entrar</Button>
</Cell>

    <span>{ this.state.error.message }</span>
  </Grid>

      </div>

    );

  }
}

export default withRouter(SignIn);
