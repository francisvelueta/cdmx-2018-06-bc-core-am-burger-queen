import React
 from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import pink from '@material-ui/core/colors/pink';
import Orders from './Orders';

const theme = createMuiTheme({
  palette: {
  primary: {
  main: '#ba68c8',
     },
  secondary: pink,
}
});

const product = []
function addProduc(name, price) {
  product.push({name, price});
  console.log(product);
}

const MenuDaily =({menus})=> {
  return (
    <MuiThemeProvider theme={theme}>
    <Grid xs= {6}>
    {menus && menus.map(menu => {
      return menu.Dia.map(item => {
        return <Button variant="contained" color="primary" size= "large" className= 'btn-margin' key ={item.id} onClick={e=> addProduc(item.name, item.price)}>{item.name} ${item.price}</Button>;
      })
    })}

    </Grid>

    <Orders order = {product}/>
    </MuiThemeProvider>
  )
}

export default MenuDaily;
