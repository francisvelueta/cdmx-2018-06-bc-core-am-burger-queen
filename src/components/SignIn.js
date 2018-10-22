import React, { Component } from 'react';
import { firebaseApp } from '../config/firebase';
import { withRouter } from 'react-router-dom';
import logo from './../assets/logo.png';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import pink from '@material-ui/core/colors/pink';

const theme = createMuiTheme({
  palette: {
  primary: {
  main: '#ba68c8',
     },
  secondary: pink,
}
});

// Layout with Material UI
const styles = theme => ({
  root: {
   flexGrow: 1,
 },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    color: theme.palette.text.secondary
  },
  dense: {
    marginTop: 50,
    width: 310,
    marginBottom: 50
  },
  menu: {
    width: 200,
  },
  button: {
   margin: theme.spacing.unit,
 },
});
// Ends layout with Material UI

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
// function about save information in inputs
handleChange = name => event => {
     this.setState({
       [name]: event.target.value,
     });
};

// function for auth with firebase
signIn() {
  const { email, password } = this.state;
  firebaseApp.auth().signInWithEmailAndPassword(email, password)
  .then(result => this.props.history.push('/'))
  .catch(error => { this.setState({ error }) });

}
  render() {
    const { classes } = this.props;
    return (
  <MuiThemeProvider theme ={theme}>
      <div className={classes.root}>
  <Grid container spacing={24}>
    <Grid container
      direction="row"
      justify="center"
      alignItems="center">
      <img src= {logo}  className={classes.dense} alt ="logo de burger queen"/>
    </Grid>
    <Grid  container
      direction="row"
      justify="center"
      alignItems="center" >
    <TextField
        id="outlined-email-input"
        label="Email"
        className={classes.textField}
        type="email"
        name="email"
        autoComplete="email"
        onChange={this.handleChange('email')}
        margin="normal"
        variant="outlined"
    />

    </Grid>
      <Grid container
      direction="row"
      justify="center"
      alignItems="center">
    <TextField
        id="outlined-password-input"
        label="Password"
        className={classes.textField}
        type="password"
        autoComplete="current-password"
        onChange={this.handleChange('password')}
        margin="normal"
        variant="outlined"
        />
    </Grid>
    <Grid container
      direction="row"
      justify="center"
      alignItems="center">
    <Button variant="outlined" size="large" color="secondary" className={classes.button} onClick = { ()=> this.signIn() }>
      Entrar
    </Button>
    </Grid>
    </Grid>
      <Grid container
      direction="row"
      justify="center"
      alignItems="center">
      { this.state.error.message }
    </Grid>
    </div>
  </MuiThemeProvider>
    );
  }
}



export default withRouter(withStyles(styles)(SignIn));
