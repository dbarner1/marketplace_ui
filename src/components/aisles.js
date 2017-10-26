import React from 'react';
import Products from './products.js';

var aislesData = [
  {
    img: 'https://www.army.mil/e2/c/images/2013/02/07/281338/size0.jpg',
    title: 'Prepared Foods',
    url: 'https://barner-marketplace-api.herokuapp.com/products'
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/27050121-milk-wallpapers.jpg',
    title: 'Dairy',
    url: 'https://barner-marketplace-api.herokuapp.com/products'
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Candy_colors.jpg',
    title: 'Candy',
    url: 'https://barner-marketplace-api.herokuapp.com/products'
  },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Fruits_and_vegetables_at_market.jpg',
      title: 'Veggies',
      url: 'https://barner-marketplace-api.herokuapp.com/products'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/1/13/HK_Kwun_Tong_Shui_Wo_Street_Market_Cold_Meats.JPG',
      title: 'Meats',
      url: 'https://barner-marketplace-api.herokuapp.com/products'
    },
    {
      img: 'https://c1.staticflickr.com/9/8520/8508069576_c95a895136_b.jpg',
      title: 'Canned Goods',
      url: 'https://barner-marketplace-api.herokuapp.com/products'
    }
  ]

class Aisles extends React.Component {
  constructor() {
    super();
    this.figureOutKey = this.figureOutKey.bind(this);
    this.updateNewProduct = this.updateNewProduct.bind(this);

    this.state = {
      aisleSelected:'',
      urlSelected:'https://barner-marketplace-api.herokuapp.com/products',
      new_product: ''
    };
  }

  figureOutKey(aisle) {
    this.setState({ aisleSelected: aisle.title  });
    this.setState({ urlSelected: aisle.url });
  }

  updateNewProduct(aisle) {
    this.setState({ new_product: aisle.title  });
  }



  componentDidMount() {
    var allProductsScrollDiv = document.getElementById('allProductsScroll');
    var itemsProcessed = 0;
    const aislesThis = this;

    aislesData.forEach(function (product) {
       itemsProcessed++;
       allProductsScrollDiv.innerHTML += "<div class='aisleSelectDiv'><img src="+product.img+" class='aisleSelectImage'/><p class='aisleTitle'>"+ product.title +" </p></div>"
     });

    var aisleSelectDivs = document.getElementsByClassName("aisleSelectDiv");

    if(itemsProcessed === aisleSelectDivs.length) {
      for(var i=0;i<aisleSelectDivs.length;i++) {

        this.updateNewProduct = this.updateNewProduct.bind(this);

        aisleSelectDivs[i].addEventListener("click", function(aisleDiv) {
            aislesThis.figureOutKey(aisleDiv);
            aislesThis.updateNewProduct(aisleDiv);
         })
      }
    }

   }

  render() {
    return (
      <div>
        <div id="allProductsScroll">
        </div>
        <div id="currentProduct">
          <Products updateNewProduct = {this.updateNewProduct} aisleSelected={this.state.aisleSelected} urlSelected={this.state.urlSelected} />
        </div>
      </div>
    )
  }
}


export default Aisles;
