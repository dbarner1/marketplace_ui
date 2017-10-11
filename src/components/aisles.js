import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router-dom';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: 330
  },
  gridList: {
    width: 325,
    height: 450,
    overflowY: 'auto',
  },
};

var tilesData = [
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Fruits_and_vegetables_at_market.jpg',
      title: 'Veggies'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/1/13/HK_Kwun_Tong_Shui_Wo_Street_Market_Cold_Meats.JPG',
      title: 'Meats'
    },
    {
      img: 'https://c1.staticflickr.com/9/8520/8508069576_c95a895136_b.jpg',
      title: 'Canned Goods'
    },
    {
      img: 'https://www.army.mil/e2/c/images/2013/02/07/281338/size0.jpg',
      title: 'Prepared Foods'
    }
  ]

class Aisles extends React.Component {
  render() {
    return (
  <MuiThemeProvider>
    <div id="aisles" className="centered" style={styles.root}>
      <GridList cellHeight={160} style={styles.gridList}>
        {tilesData.map((tile) => (
          <Link key={tile.title} to={`/forsale/${tile.title}`}>
            <GridTile title={tile.title}>
              <img alt='aisle' src={tile.img} />
            </GridTile>
          </Link>
        ))}
      </GridList>
    </div>
  </MuiThemeProvider>
)}
}


export default Aisles;
