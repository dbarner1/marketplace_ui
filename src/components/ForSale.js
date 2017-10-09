import React from 'react';
import '../stylesheets/index.css';
import Button from './button.js';
import Aisles from './aisles';

class ForSale extends React.Component {

  render() {
    return (
      <div className="ForSale">
          <div className="ForSaleHero">
          <h2 className="ForSaleHeroHeader">Select an Aisle</h2>
          <Aisles />
          </div>
          <div className="Products">
          </div>

      </div>
    )
  }
}

export default ForSale;
