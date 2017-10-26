import React from 'react';
import '../stylesheets/index.css';
import Button from './button';
import { Link } from 'react-router-dom';

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  componentDidMount() {
    var cart = this.props.cart;

    var ProductsInCart = document.getElementsByClassName('ProductsInCart')[0];

     cart.forEach(function(product) {
       ProductsInCart.innerHTML += product;
       ProductsInCart.innerHTML += "<br/>";
     })
  }

  handleClick() {
    alert("Sorry, online ordering is currently not available.");
  }


  render() {
    return (
      <div className="Checkout">
        <div className="Products">
        <h3>Please verify your cart items to continue to checkout.</h3>
        <div className="ProductsInCart">
        <p>Tomatoes | 2 | $1.20 |</p>
        <p>Total    | 2 | $1.20 |</p>
        </div>
        <div className="SubTotal">
        </div>
        <div  className="checkoutButton">
          <a onClick={ this.handleClick }><Button text="Submit to Real Foods" /></a>
        </div>

        </div>

      </div>
    )
  }
}

export default Checkout;
