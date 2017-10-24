import React from 'react';
import '../stylesheets/index.css';
import Aisles from './aisles';

class ForSale extends React.Component {
  constructor() {
    super();
    this.updateNewProduct = this.updateNewProduct.bind(this);
    this.state = {
      aisles: '',
      new_product: ''
    };
  }

  updateNewProduct(new_product) {
    this.setState({ new_product: new_product  });
  }

  render() {
    return (
      <div className="ForSale">
        <div className="ForSaleHero">
          <Aisles updateNewProduct ={ this.updateNewProduct }  aisle_json = { this.props.aisle_json } />
        </div>
      </div>
    )
  }
}

export default ForSale;
