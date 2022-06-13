import React from 'react';

const CartTitle = props => {
  console.log(props.userName);
  return (
    <div className="cart-title">{`${props.userName.firstName}, you added ${props.count} items`}</div>
  );
};

export default CartTitle;
