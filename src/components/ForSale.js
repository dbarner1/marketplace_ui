import React from 'react';
import '../stylesheets/index.css';
import Aisles from './aisles';

class ForSale extends React.Component {

  render() {
    return (
      <div className="ForSale">
          <div className="ForSaleHero">
          <h2 className="ForSaleHeroHeader">Select an Aisle</h2>
          <Aisles aisle_json = { this.props.aisle_json } />
          </div>
          <div className="Products">
          </div>

      </div>
    )
  }
}

export default ForSale;
