import React from 'react';
import '../stylesheets/index.css';
import Aisles from './aisles';

class ForSale extends React.Component {

  render() {
    return (
      <div className="ForSale">
          <div className="ForSaleHero">
          <p>Shop the aisles</p>
          <Aisles aisle_json = { this.props.aisle_json } />
          </div>
      </div>
    )
  }
}

export default ForSale;
