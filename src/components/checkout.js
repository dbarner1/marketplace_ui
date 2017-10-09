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
          <Button text="Checkout"/>
        </div>

      </div>
    )
  }
}

export default Checkout;
