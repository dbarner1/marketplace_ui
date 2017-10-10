import React from 'react';
import '../stylesheets/index.css';
import { withRouter } from 'react-router-dom';

class Button extends React.Component {
  render() {
    return (
        <a className="waves-effect waves-light btn">{ this.props.text }</a>
    )
  }
}

export default withRouter(Button);
