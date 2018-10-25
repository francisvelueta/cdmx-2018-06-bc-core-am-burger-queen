import './Menu.css';
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';



class Menu extends Component  {
  constructor() {
    super();
    this.state = {
      breakfeast : false,
      day: false
    }
  }


handleBreakfeast() {
    this.setState({ breakfeast : true });
}
handleDay() {
  this.setState({ breakfeast : false });
}


  render() {

console.log(this.props);
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
  {this.state.breakfeast ?
    <Grid container
      direction="row"
      justify="center"
      alignItems="center" xs = {6}>
    <Button variant="contained" color="primary" className= 'btn-margin' >
          <Typography color="inherit" >Cafe americano</Typography>
          <p variant="h6" color="inherit" >$ 5</p>
    </Button>
    <Button variant="contained" color="primary" >
    <Typography color="inherit" >Cafe con leche</Typography>
    <p variant="h6" color="inherit" >$ 7</p>
    </Button>
    <Button variant="contained" color="primary" className= 'btn-margin'>
    <Typography color="inherit" >Sandwich de jamón y queso</Typography>
    <p variant="h6" color="inherit">$ 10</p>
    </Button>
    <Button variant="contained" color="primary" >
    <Typography color="inherit" >Jugo natural	</Typography>
    <p variant="h6" color="inherit">$ 7</p>
    </Button>
    </Grid>
    :     <Grid container
          direction="row"
          justify="center"
          alignItems="center" xs={6}>
        <Button variant="contained" color="primary" className= 'btn-margin' >
        <Typography color="inherit" >Hamburguesas Simple </Typography>
        <p variant="h6" color="inherit">$ 10</p>
        </Button>
        <Button variant="contained" color="primary" >
        <Typography color="inherit" >Hamburguesas Doble </Typography>
        <p variant="h6" color="inherit" > $ 15</p>
        </Button>
        <Button variant="contained" color="primary" className= 'btn-margin'>
        <Typography color="inherit" >Papas fritas </Typography>
        <p variant="h6" color="inherit"> $ 5</p>
        </Button>
        <Button variant="contained" color="primary" >
        <Typography color="inherit" >Onion Rings </Typography>
        <p variant="h6" color="inherit"> $ 7</p>
        </Button>
        <Button variant="contained" color="primary" className= 'btn-margin'>
        <Typography color="inherit" >Agua 500ml </Typography>
        <p variant="h6" color="inherit"> $ 5</p>
        </Button>
        <Button variant="contained" color="primary" >
        <Typography color="inherit" >Agua 700ml </Typography>
        <p variant="h6" color="inherit"> $ 8</p>
        </Button>
        <Button variant="contained" color="primary" className= 'btn-margin'>
        <Typography color="inherit" >refresco 500ml </Typography>
        <p variant="h6" color="inherit"> $ 8</p>
        </Button>
        <Button variant="contained" color="primary" >
        <Typography color="inherit" >refresco 700ml </Typography>
        <p variant="h6" color="inherit"> $ 10</p>
        </Button>
        </Grid> }


<<<<<<< HEAD
=======

  {this.state.breakfeast ?
    <Grid container
      direction="row"
      justify="center"
      alignItems="center" xs = {6}>
    <Button variant="contained" color="primary" className= 'btn-margin' >
          <Typography color="inherit" >Cafe americano</Typography>
          <p variant="h6" color="inherit" >$ 5</p>
    </Button>
    <Button variant="contained" color="primary" >
    <Typography color="inherit" >Cafe con leche</Typography>
    <p variant="h6" color="inherit" >$ 7</p>
    </Button>
    <Button variant="contained" color="primary" className= 'btn-margin'>
    <Typography color="inherit" >Sandwich de jamón y queso</Typography>
    <p variant="h6" color="inherit">$ 10</p>
    </Button>
    <Button variant="contained" color="primary" >
    <Typography color="inherit" >Jugo natural	</Typography>
    <p variant="h6" color="inherit">$ 7</p>
    </Button>
    </Grid>
    :     <Grid container
          direction="row"
          justify="center"
          alignItems="center" xs={6}>
        <Button variant="contained" color="primary" className= 'btn-margin' >
        <Typography color="inherit" >Hamburguesas Simple </Typography>
        <p variant="h6" color="inherit">$ 10</p>
        </Button>
        <Button variant="contained" color="primary" >
        <Typography color="inherit" >Hamburguesas Doble </Typography>
        <p variant="h6" color="inherit" > $ 15</p>
        </Button>
        <Button variant="contained" color="primary" className= 'btn-margin'>
        <Typography color="inherit" >Papas fritas </Typography>
        <p variant="h6" color="inherit"> $ 5</p>
        </Button>
        <Button variant="contained" color="primary" >
        <Typography color="inherit" >Onion Rings </Typography>
        <p variant="h6" color="inherit"> $ 7</p>
        </Button>
        <Button variant="contained" color="primary" className= 'btn-margin'>
        <Typography color="inherit" >Agua 500ml </Typography>
        <p variant="h6" color="inherit"> $ 5</p>
        </Button>
        <Button variant="contained" color="primary" >
        <Typography color="inherit" >Agua 700ml </Typography>
        <p variant="h6" color="inherit"> $ 8</p>
        </Button>
        <Button variant="contained" color="primary" className= 'btn-margin'>
        <Typography color="inherit" >refresco 500ml </Typography>
        <p variant="h6" color="inherit"> $ 8</p>
        </Button>
        <Button variant="contained" color="primary" >
        <Typography color="inherit" >refresco 700ml </Typography>
        <p variant="h6" color="inherit"> $ 10</p>
        </Button>
        </Grid> }


>>>>>>> 62002bf8083af623ca5da7d3dcddb1b23d8b40ec
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
