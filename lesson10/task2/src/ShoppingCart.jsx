import React, { Component } from 'react';
import ProductsList from './ProductsList';
import CartTitle from './CartTitle';

class ShoppingCart extends Component {
  state = {
    cartItems: [
      {
        id: '1',
        name: 'iPhone11',
        price: 999,
      },
      {
        id: '2',
        name: 'iPhone pro',
        price: 798,
      },
    ],
  };
  render() {
    const count = this.state.cartItems.length;
    console.log(this.props.userData);
    return (
      <div className="column">
        <CartTitle userName={this.props.userData} count={count} />
        <ProductsList cartItems={this.state.cartItems} />
      </div>
    );
  }
}
export default ShoppingCart;
