import React from 'react';
import '../stylesheets/index.css';

class Button extends React.Component {
  render() {
    return (
        <div className="TemplateButton">{ this.props.text }</div>
    )
  }
}

export default Button;
