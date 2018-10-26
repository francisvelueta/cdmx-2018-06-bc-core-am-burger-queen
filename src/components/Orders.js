import React, { Component } from 'react';

class Orders extends Component {

render() {
console.log(this.props.products);
  return(
    <div>
    {this.props.products.map(item => {
      return <p>{item.name}</p>
    }) }

    </div>
  )

}
}

export default Orders;
