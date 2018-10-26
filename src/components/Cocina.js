import React, {Component }  from 'react';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';



class Cocina extends Component {
constructor(){
  super()
}


comeback(){
  this.props.history.push('/')
}

render() {
return(
  <div>
  Enviado a Cocina...
  <Button   variant="contained" color="primary" size= "large" className= 'btn-margin' onClick={e => this.comeback()}>Volver</Button>
  </div>
)


}
}


export default withRouter(Cocina)
