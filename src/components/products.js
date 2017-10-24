import React from 'react';
import '../stylesheets/index.css';

class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      aisleSelected:'Select an aisle above.',
      urlSelected:'https://barner-marketplace-api.herokuapp.com/products'
    };
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps === 'addProduct') {return} else {
      this.setState({ urlSelected: nextProps.urlSelected });
      this.setState({ aisleSelected: nextProps.aisleSelected });

      var Products = document.getElementsByClassName('Products');

      var url = this.state.urlSelected;

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
                                + "<button class='addToCartButton'>Add to Cart</button>"
                                +"<br/>"
                                + "</div>";
        });
      })
    }
  }

  render() {
    return (
      <div>
        <p className='aisleTitle'>{ this.state.aisleSelected }</p>
          <button className="TemplateButton" onClick={ ()=>this.props.updateNewProduct("potatoMaster") }> Just Testing</button>
        <div className="Products">
        </div>
      </div>
    )
  }
}

export default Products;
