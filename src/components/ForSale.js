import React from 'react';
import '../stylesheets/index.css';
import Button from './button.js';

class ForSale extends React.Component {


  componentWillMount() {
    var Products = document.getElementsByClassName('Products');
    fetch('https://barner-marketplace-api.herokuapp.com/products.json')
    .then(function(response) {return response.json();})
    .then(function(json) {
      json.forEach(function(name) {
        Products[0].innerHTML += "<div class='product'>"
                              + name.name
                              + "<img class='productImage' src='" + name.image + "'></img>"
                              + ' '
                              + name.description
                              + "<br/>"
                              + name.price
                              + "</div>";
      });
    })
  };



  render() {
    return (
      <div className="ForSale">
        <div className="ForSaleHero">
          <p>Welcome to the for sale page.</p>
        </div>
        <div className="Products">
        </div>
        <Button text="Explore Portfolio" />
      </div>
    )
  }
}

export default ForSale;
