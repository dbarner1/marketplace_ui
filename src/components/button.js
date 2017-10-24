import React from 'react';
import '../stylesheets/index.css';
import { withRouter } from 'react-router-dom';

class Button extends React.Component {
  render() {
    return (
        <button className = { this.props.classname }>{ this.props.text }</button>
    )
  }
}

export default withRouter(Button);
