import React, {Component }  from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import pink from '@material-ui/core/colors/pink';
import Orders from './Orders';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { withRouter } from 'react-router-dom';

const theme = createMuiTheme({
  palette: {
  primary: {
  main: '#ba68c8',
     },
  secondary: pink,
}
});
const PaperStyle = withStyles({
  root: {
    width: '81%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },

})(Paper);
const TableStyle = withStyles({
  table: {
    minWidth: 700,
  },

})(Table);



let product = [];

class MenuBreakfeast extends Component {
constructor(){
  super()
  this.state = {
    products: [{id: '', name: '', price: ''}] }
}


<<<<<<< HEAD
addProduc (id, name, price) {
  product.push({id, name, price });
  this.setState({
  products: product });
=======
addProduc (name, price) {

    product.push({ name, price });
    this.setState({
    products: product });
    console.log(this.state.products);


>>>>>>> 7278d5d2287651b521bbc26984870fca3c9db689

}

handlecoki() {
product= [];
this.props.history.push('/cocina');

}
vaciar() {
  this.setState({
  products: [{name: '', price: ''}]});
  product= [];
}

deleteItem(id) {

  product = product.filter((item, i) => i !== id)
  this.setState({products: product})
  }

render(){
  const menus = this.props.menus;
  const classes = this.props.styles;
let bandera = this.props.band;


  return (
    <MuiThemeProvider theme={theme}>
    <Grid xs= {6}>
    {menus && menus.map(menu => {
      return menu.Desayuno.map((item, i) => {
        return <Button  type ="submit" variant="contained" color="primary" size= "large" className= 'btn-margin' key ={i} onClick={e => this.addProduc(i, item.name, item.price)}>{item.name} ${item.price}</Button>;
      })
    })}

    </Grid>
<PaperStyle >
<TableStyle>
<TableHead>
<TableCell>Descripcion</TableCell>
<TableCell numeric>Precio</TableCell>
<TableCell numeric></TableCell>
</TableHead>

<<<<<<< HEAD
{this.state.products.map((item, i) => {
    return  (

    <TableRow key={item.id}>
    <TableCell component="th" scope="row">
          {item.name}
          </TableCell>
          <TableCell numeric> ${item.price} </TableCell>
          <TableCell ><i className="material-icons" onClick= {()=>this.deleteItem(i)}>
delete</i></TableCell>
        </TableRow>)
=======

{this.state.products.map(item => {
return  (
  <TableRow key={item.id}>
  <TableCell component="th" scope="row">
        {item.name}
        </TableCell>
        <TableCell numeric> ${item.price} </TableCell>
        <TableCell numeric></TableCell>
      </TableRow>)
>>>>>>> 7278d5d2287651b521bbc26984870fca3c9db689
})}


</TableStyle>
</PaperStyle>

<Button variant="contained" color="secondary" size= "large"  onClick={()=> {this.handlecoki()}}>
       Enviar a Cocina
</Button>
<Button variant="contained" color="secondary" size= "large"  className= 'btn-margin'   onClick={()=> {this.vaciar()}}>
       Vaciar productos
</Button>
  </MuiThemeProvider>
  )
}
}


export default withRouter(MenuBreakfeast)
