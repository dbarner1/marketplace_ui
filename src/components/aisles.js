import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

const tilesData = [
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
    title: 'Canned Goods',
  },
  {
    img: 'https://www.army.mil/e2/c/images/2013/02/07/281338/size0.jpg',
    title: 'Prepared Foods'
  }
];

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const Aisles = () => (
  <MuiThemeProvider>
    <div style={styles.root}>
      <GridList
        cellHeight={180}
        style={styles.gridList}
      >
        {tilesData.map((tile) => (
          <GridTile
            key={tile.img}
            title={tile.title}
            actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
          >
            <img src={tile.img} />
          </GridTile>
        ))}
      </GridList>
    </div>
  </MuiThemeProvider>
);

export default Aisles;
