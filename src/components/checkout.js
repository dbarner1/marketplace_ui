import React from 'react';
import '../stylesheets/index.css';

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


  render() {
    return (
      <div className="Checkout">
        <div className="Products">
        <p>Please verify your cart items to continue to checkout.</p>
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
