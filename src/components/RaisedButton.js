
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const style = {
  margin: 8,
  height: 100,
  width: 500,
};

const RaisedButtonHero = () => (
  <MuiThemeProvider className="buttonHero">
      <RaisedButton label="Buy Groceries" secondary={true} style={style} />
  </MuiThemeProvider>
);

export default RaisedButtonHero;
