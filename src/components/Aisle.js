import React from 'react';
import '../stylesheets/index.css';
import { withRouter } from 'react-router-dom';

class Aisle extends React.Component {
  render() {
    return (
        <div className='aisleSelectDiv'>
          <img src={this.props.imgSrc} className='aisleSelectImage'/>
          <p className='aisleTitle'>{ this.props.title }</p>
        </div>
    )
  }
}

export default Aisle;
