import './Menu.css';
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import MenuBreakfeast from './MenuBreakfeast';
import MenuDaily from './MenuDaily';




class Menu extends Component  {
  constructor() {
    super();
    this.state = {
      breakfeast : false,
      day: false,

    }
  }


handleBreakfeast() {
    this.setState({ breakfeast : true });
}
handleDay() {
  this.setState({ breakfeast : false });
}


  render() {
const { menus } = this.props
    return (


  <div>

  <Grid container
    direction="row"
    justify="center"
    alignItems="center">
    <Button variant="contained" color="secondary" size= "large"  className= 'btn-margin' onClick={()=> {this.handleBreakfeast()}}>
           Desayuno
    </Button>

    <Button variant="contained" color="secondary" size= "large"   onClick={()=> {this.handleDay()}}>
           Del día
    </Button>
    </Grid>
    <Grid xs ={12}>
    { this.state.breakfeast ? <MenuBreakfeast menus = {menus}/>: <MenuDaily menus = {menus}/> }

    </Grid>




  </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    menus: state.menu.menus
  }
}

export default connect(mapStateToProps)(Menu);
