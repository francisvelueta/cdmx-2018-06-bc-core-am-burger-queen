import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const MenuList =({menus})=> {

  return (
    <div>
    {menus && menus.map(menu => {
      const breakfeast = menu.Desayuno;
      breakfeast.forEach(item => {
        return <p>Hola mundo</p>
      });

    })}

    </div>

  );




}

export default MenuList;
