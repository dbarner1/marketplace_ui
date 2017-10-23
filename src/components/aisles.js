import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Products from './products.js'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
    padding: 5
  },
  titleStyle: {
    color: 'rgb(255, 255, 255)',
  },
};

var tilesData = [
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
    },
    {
      img: 'https://www.army.mil/e2/c/images/2013/02/07/281338/size0.jpg',
      title: 'Prepared Foods',
      url: 'https://barner-marketplace-api.herokuapp.com/products'
    }
  ]

class Aisles extends React.Component {
  constructor() {
    super();
    this.figureOutKey = this.figureOutKey.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.state = {
      aisleSelected:'',
      urlSelected:'https://barner-marketplace-api.herokuapp.com/products',
      cart_aisles: []
    };
  }

  addProduct(e) {
    var cart_array = this.state.cart_aisles;
    cart_array.push("yo");

    this.setState({
      cart_aisles: cart_array
    })
  }

  figureOutKey(tile) {
    this.setState({ aisleSelected: tile.title  });
    this.setState({ urlSelected: tile.url });
  }

  render() {

    return (
      <div>
        <MuiThemeProvider>
          <div style={styles.root}>
            <GridList id="aisles" style={styles.gridList} cols={2.2}>
              {tilesData.map((tile) => (
                <GridTile
                  onClick= { () => this.figureOutKey(tile) }
                  url={tile.url}
                  key={tile.img}
                  title={tile.title}
                  titleStyle={styles.titleStyle}
                  titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                >
                  <img alt="aisle name" src={tile.img} />
                </GridTile>
              ))}
            </GridList>
          </div>
        </MuiThemeProvider>
        <div id="currentProduct">
          <Products addProduct = {this.addProduct} aisleSelected={this.state.aisleSelected} urlSelected={this.state.urlSelected} />
        </div>
      </div>
    )
  }
}


export default Aisles;
