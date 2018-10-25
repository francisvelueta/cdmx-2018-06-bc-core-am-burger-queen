import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

class Menu extends Component  {

  render() {
    const { classes } = this.props;

    return (
  <div>
  <Grid container
    direction="row"
    justify="center"
    alignItems="center">

      <Button variant="contained" size="large" color="secondary" className={classes.button}>
        Desayuno
      </Button>
      <Button variant="contained" size="large" color="secondary" className={classes.button}>
        Menu del día
      </Button>
      </Grid>
      <Grid
      item xs={6}>
      <Grid>
      <Button variant="contained" size="large" color="primary" className={classes.button}>
        Cafe americano $5
      </Button>
      <Button variant="contained" size="large" color="primary" className={classes.button}>
        Cafe con leche $7
      </Button>
      </Grid>
<Grid>
<Button variant="contained" size="large" color="primary" className={classes.button}>
  Sandwich de jamón y queso $ 10
</Button>
</Grid>
<Grid>
<Button variant="contained" size="large" color="primary" className={classes.button}>
  Jugo natural	$ 7
</Button>
</Grid>
      </Grid>
  </div>
    );
  }
}
export default withStyles(styles)(Menu)
