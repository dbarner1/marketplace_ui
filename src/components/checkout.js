import React from 'react';
import '../stylesheets/index.css';
import Button from './button.js';

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  componentDidMount() {
    var cart = this.props.cart;

var ProductsInCart = document.getElementsByClassName('ProductsInCart');
    cart.forEach(function(product) {
        ProductsInCart.innerHTML += "Hello!";
     })
  }


  render() {
    return (
      <div className="Checkout">
          <p>This is the checkout page.</p>
        <div className="Products">
        <p>These are the items in your cart!</p>
        <div className="ProductsInCart">
        </div>
        <div className="SubTotal">
        </div>
        <div className="Submit">
          <button className="checkoutButton">Submit to Real Foods</button>
        </div>

        </div>

      </div>
    )
  }
}

export default Checkout;
