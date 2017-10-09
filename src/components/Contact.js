import React from 'react';
import '../stylesheets/index.css';
import Button from './button.js';

class Contact extends React.Component {
  render() {
    return (
      <div id="Home">
        <div>
          <p>Welcome to the contact page.</p>
        </div>
        <Button text="Explore Portfolio" />
      </div>
    )
  }
}

export default Contact;
