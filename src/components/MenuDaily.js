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

class MenuDaily extends Component {
constructor(){
  super()
  this.state = {
    products: [{name: '', price: ''}] }
}


addProduc (name, price) {
  product.push({ name, price });
  this.setState({
  products: product });
  console.log(this.state.products);

}



render(){

  const menus = this.props.menus;
  const classes = this.props.styles;

  return (
    <MuiThemeProvider theme={theme}>
    <Grid xs= {6}>
    {menus && menus.map(menu => {
      return menu.Dia.map(item => {
        return <Button  type ="submit" variant="contained" color="primary" size= "large" className= 'btn-margin' key ={item.id} onClick={e => this.addProduc(item.name, item.price)}>{item.name} ${item.price}</Button>;
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

{this.state.products.map(item => {
  return  (
    <TableRow key={item.id}>
    <TableCell component="th" scope="row">
          {item.name}
          </TableCell>
          <TableCell numeric> ${item.price} </TableCell>
          <TableCell numeric></TableCell>
        </TableRow>)
})}

</TableStyle>
</PaperStyle>
  </MuiThemeProvider>
  )
}
}


export default MenuDaily;
