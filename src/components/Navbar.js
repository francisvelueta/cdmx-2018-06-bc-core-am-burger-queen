import React,{ Component } from 'react';
import { withRouter } from 'react-router-dom';
import { firebaseApp } from '../config/firebase';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import pink from '@material-ui/core/colors/pink';

const styles = {
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10,
  },
  grow: {
  flexGrow: 1,
}
};


const theme = createMuiTheme({
  palette: {
    primary: {
         main: '#ba68c8',
       },
  secondary: pink,
},
});




class Navbar extends Component {

  signOut() {
    firebaseApp.auth().signOut()
    .then(result => this.props.history.replace('/signin'));
  }

  render() {
  const { classes } = this.props
    return (
      <MuiThemeProvider theme ={theme}>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Burguer Queen
            </Typography>
             <Button color="inherit"  onClick={()=> this.signOut()}>Salir</Button>
          </Toolbar>
        </AppBar>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(withStyles(styles)(Navbar));
