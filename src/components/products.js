import React from 'react';
import '../stylesheets/index.css';

class Products extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      aisleSelected:'',
      urlSelected:'https://barner-marketplace-api.herokuapp.com/products'
    };
  }

  handleClick() {
    console.log("added to cart");
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ urlSelected: nextProps.urlSelected });
    this.setState({ aisleSelected: nextProps.aisleSelected });

    var Products = document.getElementsByClassName('Products');
    var url = this.state.urlSelected;
    this.handleClick = this.handleClick.bind(this);

    fetch(url)
    .then(function(response) {return response.json();})
    .then(Products[0].innerHTML = '')
    .then(function(json) {
      json.forEach(function(name) {
        Products[0].innerHTML += "<div class='product'>"
                              + "<p class='productName'>" + name.name + "</p>"
                              + "<p class='productDescription'>" + name.description + "</p>"
                              + "<img class='productImage' src='" + name.image + "'></img>"
                              + "<br/>"
                              + "<div class='productPrice'><p>$"+(name.price/100) + "</p></div>"
                              +"<button onClick={ handleClick } className='addToCart'>Add to Cart</button>"
                              +"<br/>"
                              + "</div>";
      });
    })
  }


  render() {
    return (
      <div>
        <p>{ this.state.aisleSelected }</p>
        <div className="Products">
        </div>
      </div>
    )
  }
}

export default Products;
