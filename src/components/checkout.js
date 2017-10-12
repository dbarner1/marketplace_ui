import React from 'react';
import '../stylesheets/index.css';
import Button from './button.js';

class Checkout extends React.Component {



  render() {
    return (
      <div className="ForSale">
        <div className="ForSaleHero">
          <p>This is the checkout page.</p>

        </div>
        <div className="Products">
        <p>These are the items in your cart!</p>
        <div className="ProductsInCart">
        {this.props.cart}
        </div>
        <div className="SubTotal">
        </div>
        <div className="Submit">
        <Button text="Submit to Real Foods"/>
        </div>

        </div>

      </div>
    )
  }
}

export default Checkout;
