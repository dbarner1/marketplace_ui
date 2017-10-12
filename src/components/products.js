import React from 'react';
import '../stylesheets/index.css';
import Button from './button.js';

class Products extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
    };
  }

  handleClick() {
    console.log("added to cart");
  }


  componentWillMount() {
    var Products = document.getElementsByClassName('Products');
    var url = this.props.urlSelected;
    this.handleClick = this.handleClick.bind(this);

    fetch(url)
    .then(function(response) {return response.json();})
    .then(function(json) {
      json.forEach(function(name) {
        Products[0].innerHTML += "<div class='product'>"
                              + "<p class='productName'>" + name.name + "</p>"
                              + "<p class='productDescription'>" + name.description + "</p>"
                              + "<img class='productImage' src='" + name.image + "'></img>"
                              + "<br/>"
                              + "<div class='productPrice'><p>" + "$"+(name.price/100) + "</p>" + "</div>"
                              +"<button onClick={ handleClick } class='addToCart'>Add to Cart</button>"
                              +"<br/>"
                              + "</div>";
      });
    })
  }

  render() {
    return (
      <div className="">
          <div className="">
          </div>
          <div className="Products">
             <p>{ this.props.aisle }</p>
          </div>
      </div>
    )
  }
}

export default Products;
