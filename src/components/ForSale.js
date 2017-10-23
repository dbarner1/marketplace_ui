import React from 'react';
import '../stylesheets/index.css';
import Aisles from './aisles';

class ForSale extends React.Component {
  constructor() {
    super();
    this.addProduct = this.addProduct.bind(this);
    this.state = {
      aisles: '',
      cart_forsale: []
    };
  }

  addProduct(e) {
    var cart_array = this.state.cart_forsale;
    cart_array.push("added_for_sale");

    this.setState({
      cart_forsale: cart_array
    })
  }

  render() {
    return (
      <div className="ForSale">
          <div className="ForSaleHero">
          <Aisles addProduct={this.addProduct} aisle_json = { this.props.aisle_json } />
          </div>
      </div>
    )
  }
}

export default ForSale;
