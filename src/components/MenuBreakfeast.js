import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const MenuBreakfeast =({menus})=> {
  return (
    <div>
    { menus && menus.map(menu => {
      return (
        menu.Desayuno.map(item => {
          return(<Button variant="contained" color="primary" size= "large" key= {item.id}> {item.name}  ${item.price}</Button>)
        })
   )

    })}
    </div>
  )
}

export default MenuBreakfeast;
