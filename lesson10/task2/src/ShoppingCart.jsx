import React, { Component } from 'react';
import ProductsList from './ProductsList.jsx';
import CartTitle from './CartTitle.jsx';

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
    return (
      <div className="column">
        <CartTitle userName={this.props.userName} count={count} />
        <ProductsList cartItems={this.state.cartItems} />
      </div>
    );
  }
}
export default ShoppingCart;
