import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const style = {
  height: 100,
  width: 280,
};




class RaisedButtonHero extends React.Component {

  render() {
    return (
      <MuiThemeProvider onClick={ this.props.onclick }>
        <RaisedButton label={ this.props.label } secondary={true} style={style} />
      </MuiThemeProvider>
   );
 }
}

export default RaisedButtonHero;
