import React from 'react';
import '../stylesheets/index.css';
import Button from './button.js';

class Contact extends React.Component {
  render() {
    return (
      <div id="contactWrapper">
        <div>
          <h2>Have a question on an order?</h2>
          <p>dbarner@gmail.com</p>
          <br/>
          <h2>Curious how this works?</h2>
          <p>dbarner@gmail.com</p>
          <br/>
          <h2>Any other questions?</h2>
          <a href="tel:7814679961"><i className="large material-icons">local_phone</i></a>
        </div>
      </div>
    )
  }
}

export default Contact;
