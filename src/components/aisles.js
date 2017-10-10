import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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
    title: ''
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/1/13/HK_Kwun_Tong_Shui_Wo_Street_Market_Cold_Meats.JPG',
    title: ''
  },
  {
    img: 'https://c1.staticflickr.com/9/8520/8508069576_c95a895136_b.jpg',
    title: ''
  },
  {
    img: 'https://www.army.mil/e2/c/images/2013/02/07/281338/size0.jpg',
    title: ''
  }
];

class Aisles extends React.Component {
  render() {
    return (
  <MuiThemeProvider>
    <div className="centered" style={styles.root}>
      <GridList
        cellHeight={160}
        style={styles.gridList}
      >
        {tilesData.map((tile) => (
          <GridTile key={tile.img} title={tile.title}>
            <img alt='aisle' src={tile.img} />
          </GridTile>
        ))}
      </GridList>
    </div>
  </MuiThemeProvider>
)}
}

export default Aisles;
