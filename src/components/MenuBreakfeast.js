import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import pink from '@material-ui/core/colors/pink';

const theme = createMuiTheme({
  palette: {
  primary: {
  main: '#ba68c8',
     },
  secondary: pink,
}
});
const MenuBreakfeast =({menus})=> {
  return (
    <MuiThemeProvider theme={theme}>
    <Grid xs= {6}>
    { menus && menus.map(menu => {

      return (
        menu.Desayuno.map(item => {
          return(
              <Button variant="contained" color="primary" size= "large" className= 'btn-margin' key= {item.id}><Typography color="inherit">
              {item.name} ${item.price}</Typography></Button>)
        })
   )
    })}
    </Grid>
    </MuiThemeProvider>
  )
}

export default MenuBreakfeast;
