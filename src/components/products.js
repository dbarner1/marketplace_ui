import React from 'react';
import '../stylesheets/index.css';
import Button from './button.js';
import Main from './main';

class Products extends React.Component {
  componentWillMount() {
    var Products = document.getElementsByClassName('Products');
    var url = this.props.urlSelected

    fetch(url)
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
  }

  render() {
    return (
      <div className="ForSale">
          <div className="ForSaleHero">
          </div>
          <div className="Products">
             <p>{ this.props.aisle }</p>
             <p>{ this.props.urlSelected }</p>
          </div>
      </div>
    )
  }
}

export default Products;
