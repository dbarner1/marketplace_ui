import React from 'react';
import '../stylesheets/index.css';
import Button from './button.js';
import Aisles from './aisles';

class ForSale extends React.Component {

  componentWillMount() {
    var Products = document.getElementsByClassName('Products');

    fetch('https://barner-marketplace-api.herokuapp.com/products.json')
    .then(function(response) {return response.json();})
    .then(function(json) {
      json.forEach(function(name) {
        Products[0].innerHTML += "<div class='product'>"
                              + "<p>" + name.name + "</p>"
                              + "<img class='productImage' src='" + name.image + "'></img>"
                              + ' '
                              + "<p>" + name.description + "</p>"
                              + "<br/>"
                              + "<p>" + name.price + "</p>"
                              +"<br/>"
                              + "</div>";

      });
    })
  };

  render() {
    return (
      <div className="ForSale">
          <div className="ForSaleHero">
          <Aisles />
          </div>
          <div className="Products">
          </div>

      </div>
    )
  }
}

export default ForSale;
